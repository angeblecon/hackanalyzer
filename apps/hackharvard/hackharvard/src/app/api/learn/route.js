import { NextResponse } from 'next/server';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PGVectorStore } from 'langchain/vectorstores/pgvector';
import { openaiConfig, pgHackharvardLangchainConfig } from '@/configs';

export async function POST(request) {

  const res = await request.json();

  const { contents } = res;

  console.log('Learning...', contents);

  const embeddings = new OpenAIEmbeddings(openaiConfig);

  const pgvectorStore = await PGVectorStore.initialize(embeddings, pgHackharvardLangchainConfig);

  await pgvectorStore.addDocuments(contents.map(c => ({ pageContent: c })));

  return NextResponse.json({ status: 200 });
  
};