import OpenAI from 'openai';
import { useBackOff } from '@/utils';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const generatePrompt = description => `Given a text description of a hackathon project, analyze its Thematic Focus, Objective Approach, and Target User to provide insights for judges.

Input:
Project_Description: ${description}

Output (should be a valid JSON):
{
  "shortDescription": "[One-sentence description of the project]",
  "thematicFocus": "[Short summary describing the thematic focus of the project.]",
  "objectiveApproach": "[Short summary stating the objectives of the technology developed in the project.]",
  "targetUser": "[Short summary describing who the target or end user of the project is.]"
}`;

const generateDescription = async description => {
  const prompt = generatePrompt(description);

  const answer = await useBackOff(() => (
    openai.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      temperature: 0,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    })
      .catch(err => {
        console.error('OPEN_AI_ERROR', err);
        throw err;
      })
  ))
    .then(r => r.choices[0]?.message?.content);
    
  console.log(answer);

  let response = answer;
  try {
    response = JSON.parse(response);
  } catch(err) {
    console.err(err);
  }
  return response;
};

export default generateDescription;