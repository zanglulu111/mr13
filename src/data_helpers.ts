
import { OptionItem } from './types';

export const opt = (id: string, labelCN: string, labelEN: string, prompt: string, assetTags: string[] = []): OptionItem => ({
  id, labelCN, labelEN, prompt, descCN: prompt, descEN: prompt, assetTags
});

export const simpleOpt = (id: string, labelCN: string, labelEN: string, promptValue?: string): OptionItem => ({
  id, labelCN, labelEN, prompt: promptValue || id, 
});
