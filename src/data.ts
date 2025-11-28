
import { OptionItem, OptionGroup } from './types';
import { globalOptions } from './data_global';
import { humanOptions } from './data_human';
import { creatureOptions } from './data_creature';
import { sceneOptions } from './data_scene';
import { postProcessOptions } from './data_post';

// Re-export everything so App.tsx doesn't break
export { globalOptions, initialGlobal } from './data_global';
export { humanOptions, initialHuman } from './data_human';
export { creatureOptions, initialCreature } from './data_creature';
export { sceneOptions, initialScene } from './data_scene';
export { postProcessOptions } from './data_post';

// --- OPTION MAP & HELPERS ---
export const optionMap = new Map<string, OptionItem>();

const register = (data: any) => {
    if (Array.isArray(data)) {
        if (data.length > 0 && ('groupNameCN' in data[0] || 'titleCN' in data[0])) {
             (data as any[]).forEach(g => {
                 if(g.options) {
                    // Check if it's OptionGroup[] or just OptionItem[] that happens to have group props (unlikely overlap in this schema)
                    if(Array.isArray(g.options)) {
                        const opts = g.options;
                        if(opts.length > 0 && 'groupNameCN' in opts[0]) {
                            // It is OptionGroup[]
                            (opts as OptionGroup[]).forEach(subG => {
                                subG.options.forEach(o => optionMap.set(o.id, o));
                            });
                        } else {
                            // It is OptionItem[]
                            (opts as OptionItem[]).forEach(o => optionMap.set(o.id, o));
                        }
                    }
                 }
             });
        } else {
             (data as OptionItem[]).forEach(o => optionMap.set(o.id, o));
        }
    } else if (typeof data === 'object') {
        Object.values(data).forEach(val => register(val));
    }
};

register(globalOptions);
register(humanOptions);
register(creatureOptions);
register(sceneOptions);
register(postProcessOptions);

export const getOptionPrompt = (id: string): string => {
  const item = optionMap.get(id);
  return item ? item.prompt : id; 
};

export const getOptionLabel = (id: string, lang: 'CN' | 'EN'): string => {
  const item = optionMap.get(id);
  return item ? (lang === 'CN' ? item.labelCN : item.labelEN) : id;
};
