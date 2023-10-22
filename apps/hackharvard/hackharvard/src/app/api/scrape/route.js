import { NextResponse } from 'next/server';
import { searchProjects } from '@/utils';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const content = await searchProjects(query);

  return NextResponse.json({ status: 200, content });
};