const setupTextarea = document.getElementById("setup-textarea");
const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

const apiKey = "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";
const url = "https://api.openai.com/v1/completions"; 

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="public/loading.svg" class="loading" id="loading">`;
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
  }
});
