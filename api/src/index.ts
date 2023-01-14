import { ChatGPTAPIBrowser } from 'chatgpt';
import { OPENAI_EMAIL, OPENAI_PASSWORD } from './dotenv';

async function start() {
  const api = new ChatGPTAPIBrowser({
    email: OPENAI_EMAIL,
    password: OPENAI_PASSWORD,
  });

  await api.initSession();

  const result = await api.sendMessage('Write a poem about TypeScript');
  console.log(result.response);
}

void start();
