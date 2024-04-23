const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(prompt) {
    const generationConfig = {
        stopSequences: ["***","\n"],
        maxOutputTokens:100,
        temperature: 0.9,
        topP: 1,
        topK: 1,
      };
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro",generationConfig});


  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
module.exports.run=run;
