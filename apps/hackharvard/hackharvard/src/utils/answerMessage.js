import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PGVectorStore } from 'langchain/vectorstores/pgvector';
import { ChatBedrock } from 'langchain/chat_models/bedrock';
import { HumanMessage } from 'langchain/schema';
import { generatePrompt } from '@/utils';
import { bedrockConfig, postgresqlConfig, openaiConfig } from '@/configs';

const answerMessage = async (message, conversation) => {

  const model = new ChatBedrock(bedrockConfig);
  
  const embeddings = new OpenAIEmbeddings(openaiConfig);

  const pgvectorStore = await PGVectorStore.initialize(embeddings, postgresqlConfig);
  
  const data = await pgvectorStore.similaritySearch(message, 3); // '{'facilities': [2]}');

  await pgvectorStore.end();

  console.log(data);

  if (data?.length) {

    const input = generatePrompt(message, conversation, data.map(d => d.pageContent));

    console.log(input);

    return model._streamResponseChunks([
      new HumanMessage({ content: input }),
    ], {});

  }

  return;

};

export default answerMessage;