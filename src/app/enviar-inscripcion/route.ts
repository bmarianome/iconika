import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {
    
    

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
