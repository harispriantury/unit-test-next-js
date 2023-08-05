import { NextRequest, NextResponse } from "next/server";

//endpoint get
export async function GET(req: NextRequest, res: NextResponse) {
  const response = await fetch("https://equran.id/api/v2/surat");
  const result = await response.json();
  return NextResponse.json({ result });
}
