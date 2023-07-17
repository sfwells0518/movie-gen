import { Configuration, OpenAIApi } from "openai";

const setupTextarea = document.getElementById("setup-textarea");
const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OpenAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    const userInput = setupTextarea.value;
    setupInputContainer.innerHTML = `<img src="public/loading.svg" class="loading" id="loading">`;
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
    fetchBotReply();
  }
});

async function fetchBotReply(outline) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate a short message to enthusiastically say "${outline}" sounds interesting and that you need a few moments to think about it. Mention one aspect of the sentence.`,
    max_tokens: 60
  });
  movieBossText.innerText = response.data.choices[0].text.trim();
}