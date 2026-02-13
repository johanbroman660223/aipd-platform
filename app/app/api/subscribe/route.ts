import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Ny formulärpost:", body);

  // Här kan du lägga till mail, databaskoppling etc.
  return NextResponse.json({ success: true });
}
