// src/services/geminiService.ts

// 定义返回的数据类型 (根据你旧项目的需求)
export interface MasterPromptResult {
  purist: { title: string; prompt: string; translation: string; reasoning: string };
  aesthete: { title: string; prompt: string; translation: string; reasoning: string };
  storyteller: { title: string; prompt: string; translation: string; reasoning: string };
}

export const generateMasterPrompts = async (rawPrompt: string): Promise<MasterPromptResult> => {
  try {
    console.log("正在向后端发送请求...");
    
    // ★★★ 核心变化：请求我们自己的后端 API ★★★
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: rawPrompt // 把用户输入发给后端
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      // ★★★ 修改点：强制把错误对象转成字符串，这样你就能看到具体是哪里错了 ★★★
      const errorMessage = JSON.stringify(errorData, null, 2);
      console.error("后端返回的详细错误:", errorMessage); // 在控制台打印
      throw new Error(`后端报错: ${errorMessage}`);
    }

    // 后端已经帮我们处理好了数据，直接拿到 JSON
    const data = await response.json();
    
    // 解析数据：因为我们在后端伪装成了 Gemini 格式
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) throw new Error("AI 返回内容为空");

    // 解析 JSON 字符串为对象
    // (因为你的 Prompt 要求 AI 返回 JSON 格式的字符串)
    try {
        // 有时候 AI 会在 JSON 前后加 ```json ... ```，我们需要去掉它
        const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanText) as MasterPromptResult;
    } catch (e) {
        console.error("JSON 解析失败:", text);
        throw new Error("AI 返回的格式不对，无法解析");
    }

  } catch (error) {
    console.error("前端调用出错:", error);
    throw error;
  }
};