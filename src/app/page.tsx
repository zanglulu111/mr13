"use client";

import React, { useState, useRef, useEffect } from 'react';
import { User, Bug, Image as ImageIcon, ChevronRight, ChevronLeft, Wand2, Copy, Check, Circle, Dice5, History, Globe, RotateCcw, X, BookOpen } from 'lucide-react';

// 确保你已经把 types.ts 和 data.ts 搬运到了 src 目录，或者根据你的实际路径修改引用
import { 
  DesignState, LayerStep, SubjectType, 
  HumanEngineState, CreatureEngineState, SceneState, GlobalFieldState, PostProcessState, HistoryItem, OptionItem, OptionData, MasterPromptResult
} from '@/types'; // 假设你在 src/types.ts

import { 
  globalOptions, humanOptions, creatureOptions, sceneOptions, postProcessOptions,
  initialGlobal, initialHuman, initialCreature, initialScene,
  getOptionPrompt, getOptionLabel
} from '@/data'; // 假设你在 src/data.ts

// 确保组件路径正确
import { CreativeInput } from '@/components/CreativeInput';
import { SelectionCard } from '@/components/SelectionCard'; // 这里修复了重复的 from
import { HistoryPanel } from '@/components/HistoryPanel';
import { MasterPromptGenerator } from '@/components/MasterPromptGenerator';

// --- INITIAL STATE ---
const initialPostProcess: PostProcessState = {
  shot: "",
  lens: "",
  angle: "",
  lighting: "",
  cameraFX: "",
  screenFX: "",
  quality: ""
};

const initialState: DesignState = {
  global: initialGlobal,
  subjectType: null,
  human: initialHuman,
  creature: initialCreature,
  scene: initialScene,
  postProcess: initialPostProcess
};

const SEPARATOR = '|';

// --- COMPONENT: Summary Bar ---
const SummaryBar: React.FC<{ tags: string[], prompt: string, lang: 'CN' | 'EN' }> = ({ tags, prompt, lang }) => {
  const [copied, setCopied] = useState(false);
  
  if (tags.length === 0) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mb-8 animate-in fade-in slide-in-from-top-2 z-10 relative">
        <div className="bg-[#111] border border-white/10 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 flex-1">
                  {tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-lux-gold/10 text-lux-gold border border-lux-gold/20 whitespace-nowrap">
                        {tag}
                      </span>
                  ))}
              </div>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-lux-gold text-black rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#E5C558] transition-colors shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              >
                {copied ? <Check size={14}/> : <Copy size={14}/>}
                {lang === 'CN' ? '一键复制' : 'COPY PROMPT'}
              </button>
        </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const [lang, setLang] = useState<'CN' | 'EN'>('CN');
  const [step, setStep] = useState<LayerStep>(LayerStep.GLOBAL_FIELD);
  const [state, setState] = useState<DesignState>(initialState);
  
  // Generation & History
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [cnSummary, setCnSummary] = useState<string>("");
  
  // Lifted AI Result State (for persistence)
  const [masterResult, setMasterResult] = useState<MasterPromptResult | null>(null);
  
  // History State
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  
  // Track which history item is currently active/being viewed
  const [viewingHistoryId, setViewingHistoryId] = useState<string | null>(null);

  const topRef = useRef<HTMLDivElement>(null);

  // Load History on Mount (Client-side only)
  useEffect(() => {
    try {
        const saved = localStorage.getItem('visionary_history');
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    } catch (e) {
        console.error("Failed to load history", e);
    }
  }, []);

  // Save History on Change
  useEffect(() => {
      if (history.length > 0) {
        localStorage.setItem('visionary_history', JSON.stringify(history));
      }
  }, [history]);

  // Scroll to top on step change
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [step]);


  const t = (cn: string, en: string) => (lang === 'CN' ? cn : en);

  // --- Helpers for Prompt Logic ---
  const full = (id: string) => {
      if(!id || id === 'none') return '';
      return id.split(SEPARATOR).map(i => getOptionPrompt(i.trim())).filter(Boolean).join(', ');
  };
  
  const first = (id: string) => {
      if(!id || id === 'none') return '';
      const p = getOptionPrompt(id.split(SEPARATOR)[0]);
      return p ? p.split(',')[0].trim() : '';
  };

  const l = (id: string) => {
      if(!id || id === 'none') return '';
      return id.split(SEPARATOR).map(i => getOptionLabel(i.trim(), lang)).filter(Boolean).join(' + ');
  };
  
  const clean = (text: string) => {
      return text.replace(/\s+/g, ' ').replace(/ ,/g, ',').replace(/,+/g, ',').replace(/^, /, '').replace(/, \./g, '.').trim();
  };

  const getTags = (ids: (string | undefined)[]) => {
      return ids.filter(Boolean).map(id => l(id!)).filter(t => t !== '');
  }

  // --- Dynamic Prompt Generators for SummaryBar ---
  const getGlobalSummary = () => {
     const { medium, visualSoul, visualBase, techOverlay, entropy } = state.global;
     const tags = getTags([medium, visualSoul, visualBase, techOverlay, entropy]);
     
     const pHeader = `(Masterpiece, Best Quality, 8k), ${full(medium)}, ${full(visualSoul)}`;
     const worldParts = [
        visualBase ? `WORLD: ${full(visualBase)}` : "",
        techOverlay ? `TECH: ${full(techOverlay)}` : "",
        entropy ? `MOOD: ${full(entropy)}` : ""
    ].filter(Boolean).join(". ");
     return { tags, prompt: clean(`${pHeader}. ${worldParts}`) };
  };

  const getHumanSummary = () => {
      const h = state.human;
      const tags = getTags([
          h.species, h.gender, h.age, h.ethnicity, h.body,
          h.profession, h.skin, h.hair, h.face, h.traits,
          h.fashion, h.expression, h.pose, h.action, h.gaze
      ]);
      
      const profNoun = h.profession ? first(h.profession) : "";
      const skeleton = `A ${first(h.age)} ${first(h.gender)} ${first(h.ethnicity)} ${first(h.species)} ${profNoun}, ${first(h.body)} build.`;
      const detailsParts = [full(h.skin), full(h.hair), full(h.face), full(h.traits)].filter(Boolean).join(", ");
      const details = detailsParts ? `LOOKS: ${detailsParts}.` : "";
      const attireParts = [full(h.profession), full(h.fashion)].filter(Boolean).join(", ");
      const fashion = attireParts ? `ATTIRE: ${attireParts}.` : "";
      const actionParts = [full(h.action), full(h.pose), full(h.expression), full(h.gaze)].filter(Boolean).join(", ");
      const action = actionParts ? `ACTION: ${actionParts}.` : "";
      
      return { tags, prompt: clean(`${skeleton} ${details} ${fashion} ${action}`) };
  };

  const getCreatureSummary = () => {
      const c = state.creature;
      const tags = getTags([
          c.class, c.stance, c.scale,
          c.texture, c.element,
          c.headFeatures, c.bodyParts,
          c.mood, c.action
      ]);
      
      const skeleton = `A ${first(c.scale)} ${first(c.class)} creature, ${first(c.stance)}.`;
      const skin = `MATERIAL: ${full(c.texture)} ${c.element && c.element !== 'elm_none' ? `, body made of ${full(c.element)}` : ''}.`;
      const features = `FEATURES: ${full(c.headFeatures)}, ${full(c.bodyParts)}.`;
      const action = `ACTION: ${full(c.action)}, looking ${full(c.mood)}.`;
      
      return { tags, prompt: clean(`${skeleton} ${skin} ${features} ${action}`) };
  };

  const getSceneSummary = () => {
      const s = state.scene;
      const tags = getTags([s.environment, s.space, s.props, s.time, s.weather]);
      
      let pScene = "";
      if (s.environment) pScene = `${full(s.environment)}.`;
      if (s.space) pScene += ` SPACE: ${full(s.space)}.`;
      if (s.props) pScene += ` PROPS: ${full(s.props)}.`;
      const atmosphere = [full(s.time), full(s.weather)].filter(Boolean).join(", ");
      
      return { tags, prompt: clean(`SCENE: ${pScene} ${atmosphere ? `ATMOSPHERE: ${atmosphere}.` : ''}`) };
  };

  const getPostProcessSummary = () => {
      const p = state.postProcess;
      const tags = getTags([p.shot, p.lens, p.angle, p.lighting, p.cameraFX, p.screenFX, p.quality]);
      
      const framing = [full(p.shot), full(p.angle)].filter(Boolean).join(", ");
      const rendering = [full(p.lighting), full(p.lens), full(p.cameraFX), full(p.screenFX), full(p.quality)].filter(Boolean).join(", ");
      
      const pCam = framing ? `COMPOSITION: ${framing}. ` : "";
      const pRender = rendering ? `RENDERING: ${rendering}.` : "";

      return { tags, prompt: clean(`${pCam}${pRender}`) };
  };

  // --- STATE UPDATES ---
  const updateGlobal = (k: keyof GlobalFieldState, v: string) => setState(s => ({ ...s, global: { ...s.global, [k]: v } }));
  const updateHuman = (k: keyof HumanEngineState, v: string) => setState(s => ({ ...s, human: { ...s.human, [k]: v } }));
  const updateCreature = (k: keyof CreatureEngineState, v: string) => setState(s => ({ ...s, creature: { ...s.creature, [k]: v } }));
  const updateScene = (k: keyof SceneState, v: string) => setState(s => ({ ...s, scene: { ...s.scene, [k]: v } }));
  const updatePostProcess = (k: keyof PostProcessState, v: string) => setState(s => ({ ...s, postProcess: { ...s.postProcess, [k]: v } }));

  const handleNext = () => {
    if (step === LayerStep.SUBJECT_SELECT) {
      if (!state.subjectType) return;
      if (state.subjectType === SubjectType.SCENE_ONLY) {
        setStep(LayerStep.SCENE_LAYER);
      } else {
        setStep(LayerStep.SUBJECT_DETAILS);
      }
    } else if (step === LayerStep.SCENE_LAYER) {
        setStep(LayerStep.POST_PROCESS);
    } else if (step === LayerStep.POST_PROCESS) {
       generate();
       setStep(LayerStep.SYNTHESIS);
    } else {
      setStep(s => s + 1);
    }
  };

  const handleBack = () => {
    if (step === LayerStep.SCENE_LAYER && state.subjectType === SubjectType.SCENE_ONLY) {
      setStep(LayerStep.SUBJECT_SELECT);
    } else {
      setStep(s => s - 1);
    }
  };

  const handleResetCurrentStep = () => {
      if (step === LayerStep.GLOBAL_FIELD) {
          setState(s => ({ ...s, global: initialGlobal }));
      } else if (step === LayerStep.SUBJECT_DETAILS) {
          if (state.subjectType === SubjectType.HUMAN) setState(s => ({ ...s, human: initialHuman }));
          if (state.subjectType === SubjectType.CREATURE) setState(s => ({ ...s, creature: initialCreature }));
      } else if (step === LayerStep.SCENE_LAYER) {
          setState(s => ({ ...s, scene: initialScene }));
      } else if (step === LayerStep.POST_PROCESS) {
          setState(s => ({ ...s, postProcess: initialPostProcess }));
      }
  };

  const handleNewCreation = () => {
       setStep(LayerStep.GLOBAL_FIELD);
       setViewingHistoryId(null);
       setState(initialState);
       setMasterResult(null);
       setGeneratedPrompt("");
       setCnSummary("");
  };

  const handleRandomize = () => {
    // Helper to pick items based on config
    const pick = (
        data: OptionData, 
        config: { 
            multi?: boolean, 
            max?: number, 
            min?: number, 
            exclude?: string[], 
            force?: string,
            probability?: number // 0-1, chance to pick anything at all
        } = {}
    ): string => {
        if (config.force) return config.force;
        if (config.probability !== undefined && Math.random() > config.probability) {
            return "";
        }

        let items: OptionItem[] = [];
        if (Array.isArray(data)) {
            if (data.length > 0 && ('groupNameCN' in data[0] || 'titleCN' in data[0])) {
                (data as any[]).forEach((g: any) => {
                   if(g.options) items.push(...g.options);
                });
            } else {
                items = data as OptionItem[];
            }
        }
        
        if (config.exclude && config.exclude.length > 0) {
            items = items.filter(i => !config.exclude!.includes(i.id));
        }

        if (items.length === 0) return "";
        
        const isMulti = config.multi || false;
        
        if (!isMulti) {
            return items[Math.floor(Math.random() * items.length)].id;
        } else {
            const min = config.min !== undefined ? config.min : 1;
            const max = config.max !== undefined ? config.max : 1;
            const count = Math.floor(Math.random() * (max - min + 1)) + min;
            
            if (count === 0) return "";

            const shuffled = [...items].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count).map(i => i.id).join(SEPARATOR);
        }
    };

    // ... Randomization Logic ...
    if (step === LayerStep.GLOBAL_FIELD) {
       const newGlobal = { ...state.global };
       newGlobal.medium = pick(globalOptions[0].options, { multi: true, min: 1, max: 2 });
       newGlobal.visualSoul = pick(globalOptions[1].options, { multi: true, min: 1, max: 2 });
       newGlobal.visualBase = pick(globalOptions[2].options, { multi: true, min: 1, max: 2 });
       newGlobal.techOverlay = pick(globalOptions[3].options, { multi: false, probability: 0.6 }); 
       newGlobal.entropy = pick(globalOptions[4].options, { multi: false, probability: 0.6 });
       setState(s => ({ ...s, global: newGlobal }));
    }
    else if (step === LayerStep.SUBJECT_SELECT) {
        const types = [SubjectType.HUMAN, SubjectType.CREATURE, SubjectType.SCENE_ONLY];
        const t = types[Math.floor(Math.random() * types.length)];
        setState(s => ({ ...s, subjectType: t }));
    }
    else if (step === LayerStep.SUBJECT_DETAILS) {
        if (state.subjectType === SubjectType.HUMAN) {
            const newHuman = { ...state.human };
            newHuman.species = pick(humanOptions.biology[0].options); 
            newHuman.gender = pick(humanOptions.biology[1].options, { force: 'gen_female' }); 
            newHuman.age = pick(humanOptions.biology[2].options, { exclude: ['age_infant', 'age_kid', 'age_child', 'age_ancient'] });
            newHuman.ethnicity = pick(humanOptions.biology[3].options, { exclude: ['eth_se_asia', 'eth_south_asia', 'eth_middle_east', 'eth_fantasy'] });
            newHuman.body = pick(humanOptions.biology[4].options);
            newHuman.profession = pick(humanOptions.profession[0].options);
            newHuman.skin = pick(humanOptions.visuals[0].options, { multi: true, min: 1, max: 2 });
            newHuman.hair = pick(humanOptions.visuals[1].options, { multi: true, min: 1, max: 2 });
            newHuman.face = pick(humanOptions.visuals[2].options, { multi: true, min: 1, max: 2 });
            newHuman.traits = pick(humanOptions.visuals[3].options, { multi: true, min: 1, max: 2 });
            newHuman.fashion = pick(humanOptions.visuals[4].options, { multi: true, min: 1, max: 2 });
            newHuman.expression = pick(humanOptions.performance[0].options, { multi: true, min: 1, max: 2 });
            newHuman.pose = pick(humanOptions.performance[1].options);
            newHuman.action = pick(humanOptions.performance[2].options);
            newHuman.gaze = pick(humanOptions.performance[3].options);
            setState(s => ({ ...s, human: newHuman }));
        } else if (state.subjectType === SubjectType.CREATURE) {
            const newCreature = { ...state.creature };
            const sections = [creatureOptions.genesis, creatureOptions.morphology];
             sections.forEach(sec => {
                sec.forEach(field => {
                     (newCreature as any)[field.id] = pick(field.options, { 
                         multi: (field as any).multi, 
                         max: (field as any).max,
                         min: (field as any).multi ? 1 : undefined
                     });
                });
            });
            setState(s => ({ ...s, creature: newCreature }));
        }
    }
    else if (step === LayerStep.SCENE_LAYER) {
        const newScene = { ...state.scene };
        newScene.environment = pick(sceneOptions.environment, { multi: true, min: 1, max: 2 });
        newScene.space = pick(sceneOptions.space, { multi: true, min: 1, max: 2 }); 
        newScene.props = pick(sceneOptions.props, { multi: true, min: 1, max: 5 });
        newScene.time = pick(sceneOptions.time, { multi: false });
        newScene.weather = pick(sceneOptions.weather, { multi: true, min: 1, max: 3 }); 
        setState(s => ({ ...s, scene: newScene }));
    }
    else if (step === LayerStep.POST_PROCESS) {
        const newPP = { ...state.postProcess };
        newPP.shot = pick(postProcessOptions.shot, { multi: false });
        newPP.lens = pick(postProcessOptions.lens, { multi: false });
        newPP.angle = pick(postProcessOptions.angle, { multi: false });
        newPP.lighting = pick(postProcessOptions.lighting, { multi: true, min: 1, max: 2 });
        newPP.cameraFX = pick(postProcessOptions.cameraFX, { multi: true, min: 1, max: 4 });
        newPP.screenFX = pick(postProcessOptions.screenFX, { multi: true, min: 1, max: 3 });
        newPP.quality = pick(postProcessOptions.quality, { multi: true, min: 1, max: 3 });
        setState(s => ({ ...s, postProcess: newPP }));
    }
  };

  const generate = () => {
    setMasterResult(null);
    setViewingHistoryId(null); 

    const { global, human, creature, scene, subjectType, postProcess } = state;

    // --- MASTER PROMPT LOGIC ---
    const pQuality = "(Masterpiece, Best Quality, 8k)";
    const pShotAngle = [full(postProcess.shot), full(postProcess.angle)].filter(Boolean).join(", ");
    const pMedium = full(global.medium);
    const pSoul = full(global.visualSoul);
    
    let pHeader = `${pQuality}`;
    if (pShotAngle) pHeader += `, ${pShotAngle}`;
    if (pMedium) pHeader += `, ${pMedium}`;
    if (pSoul) pHeader += `, ${pSoul}`;

    let pSubject = "";
    if (subjectType === SubjectType.HUMAN) {
        const profNoun = human.profession ? first(human.profession) : "";
        const skeleton = `A ${first(human.age)} ${first(human.gender)} ${first(human.ethnicity)} ${first(human.species)} ${profNoun}, ${first(human.body)} build.`;
        
        const detailsParts = [full(human.skin), full(human.hair), full(human.face), full(human.traits)].filter(Boolean).join(", ");
        const details = detailsParts ? `LOOKS: ${detailsParts}.` : "";

        const profDetails = full(human.profession);
        const fashionDesc = full(human.fashion);
        const attireParts = [profDetails, fashionDesc].filter(Boolean).join(", ");
        const fashion = attireParts ? `ATTIRE: ${attireParts}.` : "";

        const actionParts = [full(human.action), full(human.pose), full(human.expression), full(human.gaze)].filter(Boolean).join(", ");
        const action = actionParts ? `ACTION: ${actionParts}.` : "";
        
        pSubject = `${skeleton} ${details} ${fashion} ${action}`;

    } else if (subjectType === SubjectType.CREATURE) {
        const skeleton = `A ${first(creature.scale)} ${first(creature.class)} creature, ${first(creature.stance)}.`;
        const skin = `MATERIAL: ${full(creature.texture)} ${creature.element && creature.element !== 'elm_none' ? `, body made of ${full(creature.element)}` : ''}.`;
        const features = `FEATURES: ${full(creature.headFeatures)}, ${full(creature.bodyParts)}.`;
        const action = `ACTION: ${full(creature.action)}, looking ${full(creature.mood)}.`;
        pSubject = `${skeleton} ${skin} ${features} ${action}`;
    }

    let pScene = "";
    if (scene.environment) pScene = `${full(scene.environment)}.`;
    if (scene.space) pScene += ` SPACE: ${full(scene.space)}.`;
    if (scene.props) pScene += ` PROPS: ${full(scene.props)}.`;

    const worldElements = [
        global.visualBase ? `WORLD: ${full(global.visualBase)}` : "",
        global.techOverlay ? `TECH: ${full(global.techOverlay)}` : "",
        global.entropy ? `MOOD: ${full(global.entropy)}` : ""
    ].filter(Boolean).join(". ");
    
    const atmosphere = [full(scene.time), full(scene.weather)].filter(Boolean).join(", ");
    let pContext = "";
    if (atmosphere || worldElements) {
        pContext = `${worldElements} ${atmosphere ? `ATMOSPHERE: ${atmosphere}.` : ""}`;
    }

    const pLighting = full(postProcess.lighting);
    const pLens = full(postProcess.lens);
    const pFXRaw = [pLighting, pLens, full(postProcess.cameraFX), full(postProcess.screenFX), full(postProcess.quality)].filter(Boolean).join(", ");
    const pTech = pFXRaw ? `RENDERING: ${pFXRaw}.` : "";

    let pFooter = "--v 6.0 --style raw";
    const mediumPrompt = (getOptionPrompt(global.medium.split(SEPARATOR)[0]) || "").toLowerCase();
    if (
        mediumPrompt.includes("anime") || 
        mediumPrompt.includes("manga") || 
        mediumPrompt.includes("illustration") ||
        mediumPrompt.includes("2d") ||
        mediumPrompt.includes("comic")
    ) {
        pFooter = "--niji 6";
    }

    let finalPrompt = "";
    if (subjectType === SubjectType.SCENE_ONLY) {
        finalPrompt = `${pHeader} SCENE: ${pScene} ${pContext} ${pTech} ${pFooter}`;
    } else {
        finalPrompt = `${pHeader} SUBJECT: ${pSubject} SCENE: ${pScene} ${pContext} ${pTech} ${pFooter}`;
    }

    finalPrompt = clean(finalPrompt);
    setGeneratedPrompt(finalPrompt);

    // Summary for UI
    const getLabel = (val: string) => val ? l(val) : null;
    
    const globalTags = [
        getLabel(global.medium), getLabel(global.visualSoul), getLabel(global.visualBase), 
        getLabel(global.techOverlay), getLabel(global.entropy)
    ];

    let subjectTags: (string|null)[] = [];
    if (subjectType === SubjectType.HUMAN) {
        subjectTags = [
            getLabel(human.species), getLabel(human.gender), getLabel(human.age), getLabel(human.ethnicity), getLabel(human.body),
            getLabel(human.profession), 
            getLabel(human.skin), getLabel(human.hair), getLabel(human.face), getLabel(human.traits), getLabel(human.fashion),
            getLabel(human.expression), getLabel(human.pose), getLabel(human.action), getLabel(human.gaze)
        ];
    } else if (subjectType === SubjectType.CREATURE) {
        subjectTags = [
            getLabel(creature.class), getLabel(creature.stance), getLabel(creature.scale), 
            getLabel(creature.texture), getLabel(creature.element),
            getLabel(creature.headFeatures), getLabel(creature.bodyParts),
            getLabel(creature.mood), getLabel(creature.action)
        ];
    }

    const sceneTags = [
        getLabel(scene.environment), getLabel(scene.space), getLabel(scene.props), getLabel(scene.time), getLabel(scene.weather)
    ];

    const postTags = [
        getLabel(postProcess.shot), getLabel(postProcess.angle), getLabel(postProcess.lighting), getLabel(postProcess.lens),
        getLabel(postProcess.cameraFX), getLabel(postProcess.screenFX), getLabel(postProcess.quality)
    ];

    const allTags = [...globalTags, ...subjectTags, ...sceneTags, ...postTags].filter(Boolean);
    setCnSummary(allTags.join(" + "));
  };

  const handleOnAIComplete = (result: MasterPromptResult | null) => {
      setMasterResult(result);
      if (result) {
          const newId = Date.now().toString();
          const newItem: HistoryItem = {
              id: newId,
              timestamp: Date.now(),
              title: lang === 'CN' ? `创作 ${new Date().toLocaleTimeString('zh-CN', {hour:'2-digit', minute:'2-digit'})}` : `Creation ${new Date().toLocaleTimeString()}`,
              prompt: generatedPrompt,
              summary: cnSummary,
              designState: JSON.parse(JSON.stringify(state)),
              masterResult: result
          };
          setHistory(prev => [newItem, ...prev]);
          setViewingHistoryId(newId);
      }
  };

  const handleHistoryRestore = (item: HistoryItem) => {
      setState(item.designState);
      setGeneratedPrompt(item.prompt);
      setCnSummary(item.summary);
      setMasterResult(item.masterResult || null);
      setViewingHistoryId(item.id);
      setStep(LayerStep.SYNTHESIS);
      setIsHistoryOpen(false); 
  };

  const handleHistoryTitleUpdate = (id: string, newTitle: string) => {
      setHistory(prev => prev.map(item => item.id === id ? { ...item, title: newTitle } : item));
  };
  
  const handleDeleteHistory = (id: string) => {
      setHistory(prev => prev.filter(item => item.id !== id));
      if (viewingHistoryId === id) setViewingHistoryId(null);
  };

  // Common Header Style
  const Header = ({ title, subtitle, showToolbar = true }: { title: string, subtitle: string, showToolbar?: boolean }) => (
      <div className="text-center mb-16 relative w-full flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-serif text-lux-gold mb-4 tracking-tight">{title}</h2>
          <p className="text-gray-400 font-mono text-sm md:text-base uppercase tracking-[0.2em]">{subtitle}</p>
      </div>
  );

  // Control Deck Component (Internal)
  const ControlDeck = () => (
      <div className="flex items-center gap-3 bg-[#0A0A0A]/90 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] mx-4">
          <button 
            onClick={() => setIsHistoryOpen(true)}
            className="flex flex-col md:flex-row items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 rounded-xl text-[10px] md:text-xs font-mono uppercase tracking-wider transition-all hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            title={t('查看历史记录', 'View History')}
          >
            <BookOpen size={16} /> <span className="hidden md:inline">{t('历史', 'History')}</span>
          </button>

          <div className="w-[1px] h-6 bg-white/10 hidden md:block"></div>

          <button 
            onClick={handleRandomize}
            disabled={step === LayerStep.SYNTHESIS}
            className="flex flex-col md:flex-row items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-lux-gold border border-lux-gold/20 rounded-xl text-[10px] md:text-xs font-mono uppercase tracking-wider transition-all hover:border-lux-gold/50 disabled:opacity-30 disabled:cursor-not-allowed"
            title={t('随机生成当前层级', 'Randomize Current Layer')}
          >
            <Dice5 size={16} /> <span className="hidden md:inline">{t('随机', 'Random')}</span>
          </button>
          
          <button 
            onClick={handleResetCurrentStep}
            disabled={step === LayerStep.SYNTHESIS || step === LayerStep.SUBJECT_SELECT}
            className="flex flex-col md:flex-row items-center gap-2 px-4 py-2 bg-white/5 hover:bg-red-900/20 text-gray-400 hover:text-red-400 border border-white/5 rounded-xl text-[10px] md:text-xs font-mono uppercase tracking-wider transition-all hover:border-red-500/30 disabled:opacity-30 disabled:cursor-not-allowed"
            title={t('重置当前层级', 'Reset Current Layer')}
          >
            <RotateCcw size={16} /> <span className="hidden md:inline">{t('重置', 'Reset')}</span>
          </button>

          <div className="w-[1px] h-6 bg-white/10 hidden md:block"></div>

          <button 
            onClick={handleNewCreation}
            className="flex flex-col md:flex-row items-center gap-2 px-4 py-2 bg-lux-gold/10 hover:bg-lux-gold/20 text-lux-white hover:text-lux-gold border border-lux-gold/30 rounded-xl text-[10px] md:text-xs font-mono uppercase tracking-wider transition-all hover:border-lux-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            title={t('开始全新创作', 'Start New Creation')}
          >
             <Wand2 size={16} /> <span className="hidden md:inline">{t('新创作', 'New')}</span>
          </button>
      </div>
  );

  const renderGlobal = () => {
    const summary = getGlobalSummary();
    return (
        <div className="space-y-12 animate-in slide-in-from-right duration-500 w-full relative">
           <Header 
              title={t('美学时空场域', 'Aesthetic Time-Space Field')}
              subtitle={t('Layer 0: 物理法则与美学基调', 'Layer 0: Physics & Aesthetic Axioms')}
           />
           <SummaryBar tags={summary.tags} prompt={summary.prompt} lang={lang} />
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
              {globalOptions.map(opt => (
                 <CreativeInput 
                    key={opt.id}
                    labelCN={opt.titleCN} labelEN={opt.titleEN}
                    value={(state.global as any)[opt.id]}
                    onChange={v => updateGlobal(opt.id as keyof GlobalFieldState, v)}
                    options={opt.options} lang={lang}
                    multiSelect={opt.multi} maxSelections={opt.max}
                 />
              ))}
           </div>
        </div>
    );
  };

  const renderSubjectSelect = () => (
    <div className="flex flex-col items-center justify-start gap-8 animate-in zoom-in-95 duration-500 w-full relative pt-12">
       <Header 
          title={t('万物本体论', 'Ontology of All Things')}
          subtitle={t('Layer 1: 核心叙事锚点', 'Layer 1: The Narrative Anchor')}
       />
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { id: SubjectType.HUMAN, icon: User, label: t('人类/亚人', 'Humanoid'), desc: t('构建人物、超级英雄与类人角色', 'Build humans, superheroes, and androids') },
            { id: SubjectType.CREATURE, icon: Bug, label: t('生物/异种', 'Creature'), desc: t('创造野兽、怪物与神话生物', 'Create beasts, monsters, and myths') },
            { id: SubjectType.SCENE_ONLY, icon: ImageIcon, label: t('纯场景', 'Scene Only'), desc: t('仅描绘空镜头与环境艺术', 'Focus solely on environment art') },
          ].map((item) => (
            <SelectionCard
              key={item.id}
              label={item.label}
              subLabel={item.desc}
              icon={item.icon}
              selected={state.subjectType === item.id}
              onClick={() => setState(s => ({ ...s, subjectType: item.id as SubjectType }))}
            />
          ))}
       </div>
    </div>
  );

  const renderSubjectDetails = () => {
    if (state.subjectType === SubjectType.HUMAN) {
      const summary = getHumanSummary();
      return (
        <div className="space-y-16 animate-in slide-in-from-right duration-500 w-full relative">
           <Header 
              title={t('塑造角色', 'Sculpt Humanoid')}
              subtitle={t('Layer 1-A: 骨架 - 皮相 - 灵魂', 'Layer 1-A: Skeleton - Flesh - Soul')}
           />
           <SummaryBar tags={summary.tags} prompt={summary.prompt} lang={lang} />
           
           <div className="space-y-6">
              <h3 className="text-xl font-mono text-lux-gold border-b border-lux-gold/20 pb-4 mb-6 flex items-baseline gap-4">
                  <span className="text-2xl font-serif text-lux-gold font-bold tracking-wide">{t('生理与身份', 'BIOLOGY & IDENTITY')}</span>
                  <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{t('BIOLOGY & IDENTITY', '生理与身份')}</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {humanOptions.biology.map(opt => (
                    <CreativeInput
                        key={opt.id}
                        labelCN={opt.titleCN} labelEN={opt.titleEN}
                        value={(state.human as any)[opt.id]}
                        onChange={v => updateHuman(opt.id as keyof HumanEngineState, v)}
                        options={opt.options} lang={lang}
                    />
                ))}
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-xl font-mono text-lux-gold border-b border-lux-gold/20 pb-4 mb-6 flex items-baseline gap-4">
                  <span className="text-2xl font-serif text-lux-gold font-bold tracking-wide">{t('视觉外观', 'VISUAL APPEARANCE')}</span>
                  <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{t('VISUAL APPEARANCE', '视觉外观')}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                 {humanOptions.visuals.map(opt => (
                    <CreativeInput
                        key={opt.id}
                        labelCN={opt.titleCN} labelEN={opt.titleEN}
                        value={(state.human as any)[opt.id]}
                        onChange={v => updateHuman(opt.id as keyof HumanEngineState, v)}
                        options={opt.options} lang={lang}
                        multiSelect={opt.multi} maxSelections={opt.max}
                    />
                 ))}
              </div>
           </div>

           <div className="space-y-6">
              <h3 className="text-xl font-mono text-lux-gold border-b border-lux-gold/20 pb-4 mb-6 flex items-baseline gap-4">
                  <span className="text-2xl font-serif text-lux-gold font-bold tracking-wide">{t('职业与表演', 'PROFESSION & PERFORMANCE')}</span>
                  <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{t('PROFESSION & PERFORMANCE', '职业与表演')}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                 {humanOptions.profession.map(opt => (
                     <CreativeInput
                        key={opt.id}
                        labelCN={opt.titleCN} labelEN={opt.titleEN}
                        value={(state.human as any)[opt.id]}
                        onChange={v => updateHuman(opt.id as keyof HumanEngineState, v)}
                        options={opt.options} lang={lang}
                        multiSelect={opt.multi} maxSelections={opt.max}
                        placeholderCN="选择一个职业身份..."
                     />
                 ))}
                 {humanOptions.performance.map(opt => (
                    <CreativeInput
                        key={opt.id}
                        labelCN={opt.titleCN} labelEN={opt.titleEN}
                        value={(state.human as any)[opt.id]}
                        onChange={v => updateHuman(opt.id as keyof HumanEngineState, v)}
                        options={opt.options} lang={lang}
                        multiSelect={(opt as any).multi} maxSelections={(opt as any).max}
                    />
                 ))}
              </div>
           </div>
        </div>
      );
    } else if (state.subjectType === SubjectType.CREATURE) {
      const summary = getCreatureSummary();
      return (
        <div className="space-y-16 animate-in slide-in-from-right duration-500 w-full relative">
           <Header 
              title={t('创造生物', 'Design Creature')}
              subtitle={t('Layer 1-B: 构造 - 材质 - 行为', 'Layer 1-B: Anatomy - Texture - Action')}
           />
           <SummaryBar tags={summary.tags} prompt={summary.prompt} lang={lang} />
           
           <div className="space-y-6">
               <h3 className="text-xl font-mono text-lux-gold border-b border-lux-gold/20 pb-4 mb-6 flex items-baseline gap-4">
                   <span className="text-2xl font-serif text-lux-gold font-bold tracking-wide">{t('起源与材质', 'GENESIS & MATERIAL')}</span>
                   <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{t('GENESIS & MATERIAL', '起源与材质')}</span>
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {creatureOptions.genesis.map(opt => (
                      <CreativeInput
                        key={opt.id}
                        labelCN={opt.titleCN} labelEN={opt.titleEN}
                        value={(state.creature as any)[opt.id]}
                        onChange={v => updateCreature(opt.id as keyof CreatureEngineState, v)}
                        options={opt.options} lang={lang}
                        multiSelect={opt.multi} maxSelections={opt.max}
                      />
                  ))}
               </div>
           </div>
           
           <div className="space-y-6">
               <h3 className="text-xl font-mono text-lux-gold border-b border-lux-gold/20 pb-4 mb-6 flex items-baseline gap-4">
                   <span className="text-2xl font-serif text-lux-gold font-bold tracking-wide">{t('形态与行为', 'MORPHOLOGY & BEHAVIOR')}</span>
                   <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{t('MORPHOLOGY & BEHAVIOR', '形态与行为')}</span>
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {creatureOptions.morphology.map(opt => (
                      <CreativeInput
                        key={opt.id}
                        labelCN={opt.titleCN} labelEN={opt.titleEN}
                        value={(state.creature as any)[opt.id]}
                        onChange={v => updateCreature(opt.id as keyof CreatureEngineState, v)}
                        options={opt.options} lang={lang}
                        multiSelect={opt.multi} maxSelections={opt.max}
                      />
                  ))}
               </div>
           </div>
        </div>
      );
    }
    return null;
  };

  const renderScene = () => {
    const summary = getSceneSummary();
    return (
    <div className="space-y-12 animate-in slide-in-from-right duration-500 w-full relative">
       <Header 
          title={t('场景与氛围', 'Scene & Atmosphere')}
          subtitle={t('Layer 2: 置景 - 道具 - 天气', 'Layer 2: Set - Props - Weather')}
       />
       <SummaryBar tags={summary.tags} prompt={summary.prompt} lang={lang} />
       
       <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <CreativeInput 
                labelCN="场景" labelEN="Scene"
                value={state.scene.environment} onChange={v => updateScene('environment', v)}
                options={sceneOptions.environment} lang={lang}
                multiSelect maxSelections={3}
                placeholderCN="选择一个具体的物理场景或概念空间..."
            />
             <CreativeInput 
                labelCN="空间" labelEN="Space"
                value={state.scene.space} onChange={v => updateScene('space', v)}
                options={sceneOptions.space} lang={lang}
                multiSelect maxSelections={3}
            />
            <CreativeInput 
                labelCN="物品" labelEN="Items"
                value={state.scene.props} onChange={v => updateScene('props', v)}
                options={sceneOptions.props} lang={lang}
                multiSelect maxSelections={6}
                placeholderCN="添加关键道具..."
            />
            <CreativeInput 
                labelCN="时间" labelEN="Time"
                value={state.scene.time} onChange={v => updateScene('time', v)}
                options={sceneOptions.time} lang={lang}
            />
            <CreativeInput 
                labelCN="天气" labelEN="Weather"
                value={state.scene.weather} onChange={v => updateScene('weather', v)}
                options={sceneOptions.weather} lang={lang}
                multiSelect maxSelections={3}
            />
       </div>
    </div>
  )};

  const renderPostProcess = () => {
      const summary = getPostProcessSummary();
      return (
      <div className="space-y-12 animate-in slide-in-from-right duration-500 w-full relative">
         <Header 
            title={t('摄影与后期', 'Cinematography & Mastering')}
            subtitle={t('Layer 3: 运镜 - 光影 - 调色', 'Layer 3: Camera - Light - Grading')}
         />
         <SummaryBar tags={summary.tags} prompt={summary.prompt} lang={lang} />
         
         <div className="space-y-8 border-b border-white/10 pb-8">
             <h3 className="text-xl font-mono text-lux-gold border-b border-lux-gold/20 pb-4 mb-6 flex items-baseline gap-4">
                 <span className="text-2xl font-serif text-lux-gold font-bold tracking-wide">{t('构图、镜头与布光', 'COMPOSITION & LENS & LIGHTING')}</span>
                 <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{t('COMPOSITION & LENS & LIGHTING', '构图、镜头与布光')}</span>
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <CreativeInput 
                    labelCN="景别" labelEN="Shot Size"
                    value={state.postProcess.shot} onChange={v => updatePostProcess('shot', v)}
                    options={postProcessOptions.shot} lang={lang}
                    placeholderCN="如: 大特写, 全景..."
                />
                <CreativeInput 
                    labelCN="镜头特质" labelEN="Lens Character"
                    value={state.postProcess.lens} onChange={v => updatePostProcess('lens', v)}
                    options={postProcessOptions.lens} lang={lang}
                    placeholderCN="如: 35mm, 85mm..."
                />
                <CreativeInput 
                    labelCN="拍摄角度" labelEN="Camera Angle"
                    value={state.postProcess.angle} onChange={v => updatePostProcess('angle', v)}
                    options={postProcessOptions.angle} lang={lang}
                    placeholderCN="如: 俯视, 仰视..."
                />
                <CreativeInput 
                    labelCN="专业布光" labelEN="Lighting Setup"
                    value={state.postProcess.lighting} onChange={v => updatePostProcess('lighting', v)}
                    options={postProcessOptions.lighting} lang={lang}
                    multiSelect maxSelections={3}
                    placeholderCN="如: 伦勃朗光, 赛博霓虹..."
                 />
             </div>
         </div>

         <div className="space-y-8">
             <h3 className="text-xl font-mono text-lux-gold border-b border-lux-gold/20 pb-4 mb-6 flex items-baseline gap-4">
                 <span className="text-2xl font-serif text-lux-gold font-bold tracking-wide">{t('后期特效', 'MASTERING FX')}</span>
                 <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{t('MASTERING FX', '后期特效')}</span>
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <CreativeInput 
                     labelCN="摄影机与光学" labelEN="Camera & Optics"
                     value={state.postProcess.cameraFX} onChange={v => updatePostProcess('cameraFX', v)}
                     options={postProcessOptions.cameraFX} lang={lang}
                     multiSelect maxSelections={4}
                 />
                 <CreativeInput 
                     labelCN="视觉特效" labelEN="Visual FX"
                     value={state.postProcess.screenFX} onChange={v => updatePostProcess('screenFX', v)}
                     options={postProcessOptions.screenFX} lang={lang}
                     multiSelect maxSelections={3}
                 />
                 <CreativeInput 
                     labelCN="画质增强" labelEN="Quality Booster"
                     value={state.postProcess.quality} onChange={v => updatePostProcess('quality', v)}
                     options={postProcessOptions.quality} lang={lang}
                     multiSelect maxSelections={3}
                 />
             </div>
         </div>
      </div>
  )};

  const renderSynthesis = () => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 animate-in zoom-in-95 duration-500 w-full relative">
       <Header 
         title={t('视界降临', 'VISIONARY ARRIVAL')}
         subtitle={t('最终图层：指令合成与AI策展', 'Final Layer: Synthesis & AI Curation')}
         showToolbar={false}
       />

       <MasterPromptGenerator 
          rawPrompt={generatedPrompt} 
          summary={cnSummary} 
          lang={lang}
          result={masterResult}
          onSetResult={handleOnAIComplete}
       />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#EAEAEA] font-sans selection:bg-lux-gold selection:text-black overflow-x-hidden" ref={topRef}>
      
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#080808]/90 backdrop-blur-md h-20 flex items-center">
         <div className="w-full px-8 md:px-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-lux-gold to-lux-gold-light flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  <Wand2 size={20} className="text-black" />
               </div>
               <span className="font-serif text-2xl tracking-[0.15em] text-lux-white font-bold hidden md:block">VISIONARY <span className="text-lux-gold text-xs align-top opacity-80 font-mono">v1.0</span></span>
               <span className="font-serif text-xl tracking-widest text-lux-gold md:hidden">VISIONARY</span>
            </div>
            
            <div className="flex items-center gap-8">
                {viewingHistoryId && (
                    <div className="hidden md:flex items-center gap-2 bg-blue-900/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-300 text-xs font-mono animate-pulse">
                        <History size={12} />
                        {t('正在回溯历史记忆...', 'Accessing Memory...')}
                    </div>
                )}

                <button onClick={() => setLang(l => l === 'CN' ? 'EN' : 'CN')} className="text-xs font-mono text-gray-500 hover:text-white transition-colors flex items-center gap-2 border border-white/10 px-3 py-1 rounded hover:border-lux-gold">
                    <Globe size={12}/> {lang}
                </button>
                <div className="hidden xl:flex items-center gap-2">
                    {[
                      { s: LayerStep.GLOBAL_FIELD, l: 'Global' },
                      { s: LayerStep.SUBJECT_SELECT, l: 'Subject' },
                      { s: LayerStep.SUBJECT_DETAILS, l: 'Details' },
                      { s: LayerStep.SCENE_LAYER, l: 'Scene' },
                      { s: LayerStep.POST_PROCESS, l: 'Cinematography' },
                      { s: LayerStep.SYNTHESIS, l: 'Export' }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                            <div className={`
                                flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all
                                ${step === item.s ? 'bg-lux-gold text-black font-bold' : step > item.s ? 'text-lux-gold' : 'text-gray-700'}
                            `}>
                                {step === item.s && <Circle size={6} fill="black" />}
                                {item.l}
                            </div>
                            {idx < 5 && <div className={`w-4 h-[1px] ${step > item.s ? 'bg-lux-gold/30' : 'bg-gray-800'}`} />}
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </header>

      {isHistoryOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsHistoryOpen(false)} />
              <div className="relative w-full max-w-4xl max-h-[80vh] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.1)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                  <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                      <h3 className="text-xl font-serif text-lux-gold tracking-wide">{t('时光回溯', 'Chronicles')}</h3>
                      <button onClick={() => setIsHistoryOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                          <X size={20} />
                      </button>
                  </div>
                  <div className="overflow-y-auto p-6 custom-scrollbar">
                      <HistoryPanel 
                          history={history} 
                          currentId={viewingHistoryId || undefined}
                          onUpdateTitle={handleHistoryTitleUpdate}
                          onDelete={handleDeleteHistory}
                          onRestore={handleHistoryRestore}
                          lang={lang}
                      />
                  </div>
              </div>
          </div>
      )}

      <main className="pt-32 pb-40 w-full px-6 md:px-12 min-h-screen flex flex-col items-center">
         <div className="w-full max-w-[1800px]">
            {step === LayerStep.GLOBAL_FIELD && renderGlobal()}
            {step === LayerStep.SUBJECT_SELECT && renderSubjectSelect()}
            {step === LayerStep.SUBJECT_DETAILS && renderSubjectDetails()}
            {step === LayerStep.SCENE_LAYER && renderScene()}
            {step === LayerStep.POST_PROCESS && renderPostProcess()}
            {step === LayerStep.SYNTHESIS && renderSynthesis()}
         </div>
      </main>

      <footer className="fixed bottom-0 w-full z-50 border-t border-white/5 bg-[#080808]/95 backdrop-blur-xl h-24 flex items-center justify-center">
         <div className="w-full px-8 md:px-12 flex items-center justify-between max-w-[1920px]">
            <button 
              onClick={handleBack}
              disabled={step === LayerStep.GLOBAL_FIELD}
              className="flex items-center gap-3 text-gray-500 hover:text-white disabled:opacity-0 transition-all text-sm uppercase tracking-[0.2em] font-mono group w-32"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform"/> {t('上一步', 'Back')}
            </button>

            <ControlDeck />

            <button 
              onClick={handleNext}
              disabled={step === LayerStep.SUBJECT_SELECT && !state.subjectType}
              className={`
                flex items-center justify-center gap-4 px-8 py-4 rounded-full font-serif text-sm md:text-base tracking-[0.2em] font-bold shadow-2xl transition-all duration-500 w-48
                ${step === LayerStep.SYNTHESIS 
                  ? 'bg-white/5 text-gray-600 cursor-not-allowed opacity-0 pointer-events-none' 
                  : (step === LayerStep.SUBJECT_SELECT && !state.subjectType)
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
                    : 'bg-lux-gold text-black hover:bg-[#E5C558] hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                }
              `}
            >
               {step === LayerStep.POST_PROCESS ? t('生成指令', 'GENERATE') : t('下一步', 'NEXT')}
               {step !== LayerStep.POST_PROCESS && <ChevronRight size={18} />}
            </button>
         </div>
      </footer>
    </div>
  );
}