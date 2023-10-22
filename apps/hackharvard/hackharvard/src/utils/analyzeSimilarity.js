import OpenAI from 'openai';
import { useBackOff } from '@/utils';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const generatePrompt = (description1, description2) => `[INSTRUCTIONS]
Given two text descriptions of hackathon projects, analyze and compare them for similarity across various dimensions to aid judges in making informed decisions.

—-

[INPUT]
Project1_Description: ${description1}
Project2_Description: ${description2}

—-
[OUTPUT] Return a JSON-valid format.

{
  "thematicFocus": {
    "similarityScore": "0 to 10",
    "scoreJustification": "e.g. are the thematic focus areas the same? If so, what is the theme? If not, how are they different?"
  },
  "objectiveApproach": {
    "similarityScore": "0 to 10",
    "scoreJustification": "e.g. are the objective alignment the same? If so, what is it? If not, how are they different?"
  },
  "targetUser": {
    "similarityScore": "0 to 10",
    "scoreJustification": "e.g. are the target/end user the same? If so, who is it? If not, how are they different?"
  },
  "overallScore": {
    "similarityScore": "Average score",
    "scoreJustification": "e.g. main score justification"
  }
}`;

const analyzeSimilarity = async (description1, description2) => {

  const prompt = generatePrompt(description1, description2);

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
    response = Object.entries(response).reduce((p, c) => ({
      ...p,
      [c[0]]: {
        ...c[1],
        similarityScore: parseFloat(c[1].similarityScore)
      }
    }), {});
    console.log('dog', response);
    response.overallScore.similarityScore = parseInt(Object.entries(response).reduce((p, c) => (
      c[0] === 'overallScore' ? p : p + c[1].similarityScore
    ), 0) / 3, 10);
  } catch(err) {
    console.error(err);
  }
  return response;
};

export default analyzeSimilarity;