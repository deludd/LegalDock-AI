import OpenAI from 'openai';

// Initialize the OpenAI client with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeDocument(text: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a legal document analyzer. Extract key information and simplify complex legal language.",
        },
        {
          role: "user",
          content: `Analyze the following legal document and provide a simplified summary: ${text}`,
        },
      ],
      temperature: 0.3, // Lower temperature for more deterministic outputs
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error analyzing document with OpenAI:", error);
    throw new Error("Failed to analyze document");
  }
}