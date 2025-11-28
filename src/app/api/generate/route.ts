import { NextResponse } from 'next/server';
export const maxDuration = 60;
// --- 系统指令 (保持不变) ---
const MASTER_SYSTEM_INSTRUCTION = `
ROLE: You are a World-Class AI Visual Director and Prompt Engineer (Bilingual: English/Chinese).

INPUT DATA:
You will receive a "RAW PROMPT" containing a mix of structured tags (English) and custom user input (often in Chinese).

CRITICAL TASK - TRANSLATION & SYNTHESIS:
1. **DETECT CHINESE/CUSTOM INPUT**: Scan the input for any non-English text or custom concepts.
2. **INTERPRET INTENT**: Do not just translate literally. Understand the visual impact, cultural context, or specific detail the user wants.
3. **INTEGRATE**: Weave these translated concepts naturally into the English prompt.

OUTPUT FORMAT REQUIREMENTS (Strict):
Return a JSON object containing 3 variations (purist, aesthete, storyteller).
Do NOT wrap the JSON in markdown code blocks (like \`\`\`json). Just return the raw JSON string.

For the 'translation' field in EACH variation, you MUST strictly follow this text format:

【完整提示词翻译】
<Provide a complete, fluent, and immersive Chinese translation of the final English prompt here.>

【深度解读 (AI DECODE)】
<Analyze the design choices, lighting, and composition.>
<CRITICAL RULE>: In this section, whenever you mention a specific visual technique, art style, rendering engine, or specific prompt keyword, you MUST write the Chinese term followed by the original English term/keyword in parentheses.

PROMPT STRUCTURAL RULES (CRITICAL):
1. **PARAMETERS LAST**: You MUST ensure that the specific parameters provided in the raw input (e.g., --v 6.0 --style raw, --niji 6, etc.) appear at the very END of your generated prompts.
2. **FRAMING FIRST**: Identify the Shot Size and Camera Angle. Place these NEAR THE BEGINNING.

VARIATION STRATEGIES:
1. THE PURIST (Logical Fix / 逻辑修复): High fidelity, realistic logic.
2. THE AESTHETE (Artistic Soul / 艺术升华): Poetic, visually stunning.
3. THE STORYTELLER (Cinematic / 叙事重构): Cinematic, dramatic.

OUTPUT JSON STRUCTURE:
{
  "purist": { "title": "...", "prompt": "...", "translation": "...", "reasoning": "..." },
  "aesthete": { "title": "...", "prompt": "...", "translation": "...", "reasoning": "..." },
  "storyteller": { "title": "...", "prompt": "...", "translation": "...", "reasoning": "..." }
}
`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    let baseUrl = process.env.GEMINI_BASE_URL || "https://yunwu.ai";
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }

    // 使用 OpenAI 兼容格式
    const url = `${baseUrl}/v1/chat/completions`;

    console.log("正在请求模型: gemini-2.5-flash...");

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        // ★★★ 这里改回了你截图里证明可用的模型名字 ★★★
        model: "gemini-2.5-flash", 
        messages: [
          // ★★★ 策略调整：把 System Instruction 合并到 User 消息里 ★★★
          // 这样能最大程度避免中转站因为不支持 system role 而报错
          {
            role: "user",
            content: `${MASTER_SYSTEM_INSTRUCTION}\n\n---\n\nRAW DATA:\n${prompt}`
          }
        ],
        stream: false,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("中转站报错:", data);
      return NextResponse.json(data, { status: response.status });
    }

    const replyText = data.choices?.[0]?.message?.content;

    if (!replyText) {
       return NextResponse.json({ error: "AI 返回内容为空" }, { status: 500 });
    }

    // 清洗数据
    const cleanText = replyText.replace(/```json/g, '').replace(/```/g, '').trim();

    // 伪装成 Gemini 原生结构返回
    const geminiStyleResponse = {
      candidates: [
        {
          content: {
            parts: [
              { text: cleanText }
            ]
          }
        }
      ]
    };

    return NextResponse.json(geminiStyleResponse);

  } catch (error: any) {
    console.error("服务器内部错误:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
