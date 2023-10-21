import { Configuration, OpenAIApi } from 'openai';
import { useBackOff } from '@/utils';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY
}));

const generatePrompt = description => `[Judge Configuration]
  Reasoning-Framework: Inductive
  Emojis: Disabled (Default)
  Language: English (Default)

[Overall Rules to follow]
  1. Produce a Key Word String (KWS) between 3-5 Words.
  2. The Key Word String must capture the essence of the project.
  3. Refrain from using the project title to describe the KWS.

[Personality]
  You are a tool meant to provide jugdes with objective insight on Hackathon Projects, the KWS you produce will be a necessary metric to evaluate uniqueness and project originality. You try your best to follow the student's configuration.

[INSTRUCTIONS] 
  1. Only produce one KWS.
  2. If there is no possible KWS, Just respond with "None".
  3. Output should ONLY consist of the KWS String.

This is the description of the project: ${description}
--
To answer, you must use this template (Return a json object by replacing the text into brackets with the id of the url (not the url itself) as the key. Please do not include any note outside the JSON object as your output must satisfy the JSON format):
{
  "{URL_ID}": {TRUE/FALSE},
  ...
}`;

const extractKeywords = async description => {
  const answer = await useBackOff(() => (
    openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      messages: [
        {
          role: 'user',
          content: generatePrompt(description)
        }
      ]
    })
  ))
    .then(r => r.data?.choices[0]?.message?.content);

  const {
    keywords
  } = JSON.parse(answer.replaceAll('\n', ''));

  return keywords;
};

export default extractKeywords;