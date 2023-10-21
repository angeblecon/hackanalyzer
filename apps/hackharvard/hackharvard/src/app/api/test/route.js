import { getPgHackharvard } from '@/services';
const { db } = getPgHackharvard();
import getSql from 'sql';

const sql = getSql();

import { NextResponse } from 'next/server';

export async function GET(request) {

  const content = await db.any(sql.pgHackharvard.get);
  
  console.log(content);

  return NextResponse.json({ status: 200, content });
  
};