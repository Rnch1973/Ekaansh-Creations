import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateBlogPost = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Unable to generate content at this time. Please contact Ekaansh Creations support.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, engaging, and professional blog post (approx 200 words) for "Ekaansh Creations". 
      The topic is: "${topic}".
      Context: We sell monetizable websites as gifts (e.g., for weddings, retirement, children's future).
      Tone: Inspiring, financial empowerment, elegant.
      Format: Markdown. Include a catchy title at the top.`,
    });

    return response.text || "Content generation failed. Please try again.";
  } catch (error) {
    console.error("Error generating blog post:", error);
    return "We are currently experiencing high traffic. Please try generating a new article later.";
  }
};