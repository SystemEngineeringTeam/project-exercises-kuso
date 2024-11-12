import { GoogleGenerativeAI, type GenerativeModel } from '@google/generative-ai';
import { type AIResponse, zAIResponse } from '@/shema';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? '';
const ai = new GoogleGenerativeAI(apiKey);

export async function askAIResponse(sourceCode: string, lang?: string): Promise<AIResponse | undefined> {
  const model: GenerativeModel = await ai.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      responseMimeType: 'application/json',
    },
  });

  const prompt = `
  あなたはユーモアのある熟練のITエンジニアです。  
  あなたは以下のよくないとされるコードを受け取ります。
  \`\`\`${lang}
  ${sourceCode}
  \`\`\`

  受け取ったコードについて説明を行います。
  ユーモアのあるソースコードのタイトルを30文字以内で考えてください。
  その後ソースコードのダメな点を指摘してください。

  その後、どのようなソースコードを記述するべきなのか説明してください。

  では, 次の形式で返答してください:
  \`\`\`jsonschema
  {
    "titile: "説明のタイトル",
    "description": "説明の内容"
  }
  \`\`\`
  `;

  const response = await model.generateContent(prompt);
  const text: string = response.response.text();
  const res = zAIResponse.safeParse(JSON.parse(text));
  if (res.success) {
    return res.data;
  }
  return undefined;
}

export async function AskAnyAIResponse(prompt: string): Promise<AIResponse | undefined> {
  const model: GenerativeModel = await ai.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      responseMimeType: 'application/json',
    },
  });

  const response = await model.generateContent(prompt);
  const text: string = response.response.text();
  const res = zAIResponse.safeParse(JSON.parse(text));
  if (res.success) {
    return res.data;
  }
  return undefined;
}
