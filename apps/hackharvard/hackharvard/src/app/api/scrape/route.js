import { NextResponse } from 'next/server';

export async function GET(request) {
  // const { searchParams } = new URL(request.url);
  // const query = searchParams.get('query');
  // const page = searchParams.get('page');

  // console.log({ query, page });

  const url = new URL('https://devpost.com/software/balladeer'); // 'https://devpost.com/software/search');
  // url.searchParams.append('query', query);
  // url.searchParams.append('page', page);

  let content;

  try {
    const response = await fetch(url);
    
    if (response.ok) {
      content = await response.text();
    } else {
      console.error('Failed to fetch', response.status, response.statusText);
    }
    
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ status: 200, content });
};