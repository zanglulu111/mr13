
export enum LayerStep {
  GLOBAL_FIELD = 0,
  SUBJECT_SELECT = 1,
  SUBJECT_DETAILS = 2,
  SCENE_LAYER = 3,
  POST_PROCESS = 4,
  SYNTHESIS = 5,
}

export enum SubjectType {
  HUMAN = 'HUMAN',
  CREATURE = 'CREATURE',
  SCENE_ONLY = 'SCENE_ONLY',
}

// AI Master Prompt Interfaces
export interface AIPromptVariant {
  title: string;
  prompt: string;
  translation: string;
  reasoning?: string;
}

export interface MasterPromptResult {
  purist: AIPromptVariant;
  aesthete: AIPromptVariant;
  storyteller: AIPromptVariant;
}

// Layer 0: Global
export interface GlobalFieldState {
  visualBase: string;
  techOverlay: string;
  entropy: string;
  visualSoul: string;
  medium: string;
}

// Layer 1A: Human (Master PRD Structure)
export interface HumanEngineState {
  // 1. Bio (Keep separate)
  species: string;
  gender: string;
  age: string;
  ethnicity: string;
  body: string;
  
  // 1.5 Profession (New)
  profession: string;

  // 2. Physical Visuals (Consolidated)
  skin: string;    // Tone + Material
  hair: string;    // Length + Style + Color
  face: string;    // Vibe + Preset + Makeup
  traits: string;  // Mutations + Imperfections
  fashion: string; // Style + Item
  
  // 3. Performance (Keep separate for now, or group if needed, keeping separate based on 5-module request for visuals)
  expression: string;
  pose: string;
  action: string;
  gaze: string;
}

// Layer 1B: Creature (Master PRD Structure)
export interface CreatureEngineState {
  // 1. Blueprint
  class: string;
  stance: string;
  scale: string;
  // 2. Integumentary
  texture: string;
  element: string;
  // 3. Anatomy
  headFeatures: string;
  bodyParts: string;
  // 4. Performance
  mood: string;
  action: string;
}

// Layer 2: Scene (Set Design & Atmosphere)
export interface SceneState {
  environment: string; // Location/Set
  space: string;       // New: Scale, Composition, Background
  props: string;       // Props
  time: string;        // Time
  weather: string;     // Weather & Particles
}

// Layer 3: Cinematography & Mastering (Moved Camera/Light here)
export interface PostProcessState {
  // Cinematography
  shot: string;        // Shot Size (ECU, Wide, etc)
  lens: string;        // Focal Length (35mm, 85mm)
  angle: string;       // Camera Angle (Low, Dutch)
  lighting: string;    // Light patterns
  
  // Post FX
  cameraFX: string;    // Blur, Bokeh
  screenFX: string;    // Glitch, VHS
  quality: string;     // 8k, HDR
}

// Master State
export interface DesignState {
  global: GlobalFieldState;
  subjectType: SubjectType | null;
  human: HumanEngineState;
  creature: CreatureEngineState;
  scene: SceneState;
  postProcess: PostProcessState;
}

// History Interface
export interface HistoryItem {
  id: string;
  timestamp: number;
  title: string;
  prompt: string;
  summary: string;
  // Full State Snapshot for restoration
  designState: DesignState;
  // Cached AI Result
  masterResult?: MasterPromptResult | null;
}

export interface OptionItem {
  id: string;
  labelCN: string;
  labelEN: string;
  prompt: string;
  descCN?: string;
  descEN?: string;
  assetTags?: string[];
}

export interface OptionGroup {
  groupNameCN: string;
  groupNameEN: string;
  options: OptionItem[];
}

export type OptionData = OptionItem[] | OptionGroup[];