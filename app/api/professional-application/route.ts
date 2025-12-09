// Demo stub for `POST /api/professional-application`
// This route intentionally does not send external emails — it's safe for static/demo builds.
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    // Echo back submitted data for demo purposes only.
    return new Response(
      JSON.stringify({ message: "Demo mode — application not sent.", received: body }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}