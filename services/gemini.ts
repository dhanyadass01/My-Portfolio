
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, EDUCATION, SKILLS, LANGUAGES } from "../constants";

export async function askResumeAssistant(question: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const resumeContext = `
    User Name: ${PERSONAL_INFO.name}
    Title: ${PERSONAL_INFO.title}
    Location: ${PERSONAL_INFO.location}
    Summary: ${PERSONAL_INFO.summary}
    
    Education:
    ${EDUCATION.map(e => `- ${e.degree} at ${e.institution}, ${e.date} (${e.extra || ''})`).join('\n')}
    
    Skills:
    ${SKILLS.map(s => `- ${s.name}: ${s.level}`).join('\n')}
    
    Projects:
    ${PROJECTS.map(p => `- ${p.title}: ${p.description.join(' ')} (URL: ${p.url})`).join('\n')}
    
    Languages:
    ${LANGUAGES.map(l => `- ${l.name}: ${l.proficiency}`).join('\n')}
  `;

  const systemInstruction = `
    You are a professional AI Assistant representing ${PERSONAL_INFO.name}. 
    Use the provided resume context to answer questions about ${PERSONAL_INFO.name}'s career, projects, and skills.
    Keep answers concise, professional, and helpful. 
    If a question is not about ${PERSONAL_INFO.name}'s professional background, politely redirect to their portfolio topics.
    You should sound enthusiastic and supportive of ${PERSONAL_INFO.name}.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently resting. Please check my portfolio details below!";
  }
}
