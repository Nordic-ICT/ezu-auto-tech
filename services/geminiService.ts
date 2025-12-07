import { GoogleGenAI } from "@google/genai";
import { PRODUCTS, BRANCHES, COMPANY_NAME } from '../constants';

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the intelligent sales assistant for ${COMPANY_NAME}. 
Your goal is to help customers find automotive parts, machinery, and tools from our catalog.
Be professional, concise, and helpful. 

Here is our current product catalog data:
${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, category: p.category, branch: p.branchId, desc: p.description })))}

Here is our branch information:
${JSON.stringify(BRANCHES.map(b => ({ id: b.id, name: b.name, location: b.location })))}

If a user asks about a product we don't have, politely suggest the closest match or advise them to contact us for special orders.
Always emphasize quality and our technical expertise.
`;

export const sendChatMessage = async (
  message: string,
  history: { role: 'user' | 'model'; content: string }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently having trouble connecting to the server. Please try again later or contact support directly.";
  }
};
