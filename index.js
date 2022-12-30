//"type": "module", => Add it package.json so that instead of require we can use imports.
// OPENAI_API_KEY : add from openAPi
// const { Configuration, OpenAIApi } = require("openai");
// node index.js -> Get a Respose
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});

console.log("response =>",response.data);
