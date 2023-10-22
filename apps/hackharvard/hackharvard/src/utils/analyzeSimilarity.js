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
  "comparisonVariables": [
    {
      "variable": "Thematic Focus",
      "similarityScore": "0 to 10",
      "scoreJustification": "e.g. are the thematic focus areas the same? If so, what is the theme? If not, how are they different?"
    },
    {
      "variable": "Objective Alignment",
      "similarityScore": "0 to 10",
      "scoreJustification": "e.g. are the objective alignment the same? If so, what is it? If not, how are they different?"
    },
    {
      "variable": "Target User",
      "similarityScore": "0 to 10",
      "scoreJustification": "e.g. are the target/end user the same? If so, who is it? If not, how are they different?"
    }
  ],
  "overallSimilarityScore": "Average score",
  "overallScoreJustification": "e.g. main score justification"
}`;

const analyzeSimilarity = async (description1, description2) => {

  const prompt = generatePrompt(description1, description2);

  console.log(prompt);

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
    response.comparisonVariables = response.comparisonVariables.map(c => ({
      ...c,
      similarityScore: parseFloat(c.similarityScore)
    }));
  } catch(err) {
    console.err(err);
  }
  return response;
};

export default analyzeSimilarity;