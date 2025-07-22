import Groq from "groq-sdk";

const groq = new Groq({ 
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser:true
});

export async function summary(data:string): string{
  const chatCompletion = await getGroqChatCompletion(`${data} buatkan saya ringkasan sebanyak 1 kalimat berdasarkan data tersebut`);
  
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function recommended(data:string): string{
  const chatCompletion = await getGroqChatCompletion(`${data} buatkan saya rekomendasi sebanyak 1 kalimat berdasarkan data tersebut`);
  
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(str) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: str,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}
