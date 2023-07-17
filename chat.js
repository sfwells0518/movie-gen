const url = "https://api.openai.com/v1/completions"; 

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_OpenAI_API_KEY}`
  },
  body: JSON.stringify({
    'model': 'text-davinci-003',
    'prompt': 'Sound enthusiastic in five words or less.'
  })
}).then(response => response.json()).then(data => console.log(data))
