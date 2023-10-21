import { NextResponse } from 'next/server';
import { getDevPostProject, extractKeywords } from '@/utils';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  // get project details
  const response = await getDevPostProject(id);

  // extract keywords
  const keywords = await extractKeywords(response.description);

  console.log({ keywords })

  return NextResponse.json({
    status: 200,
    content: {
      response,
      keywords
    }
  });
};