const apiKey = "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";

const url = "https://api.openai.com/v1/completions"; 

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify({
    'model': 'text-davinci-003',
    'prompt': 'Sound sympathetic in five words or less.'
  })
}).then(response => response.json()).then(data => console.log(data))
