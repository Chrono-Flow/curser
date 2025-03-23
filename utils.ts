import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


export async function Generate(prompt: string, history = []) {
    const result = await model.startChat({ history });
    return result
}