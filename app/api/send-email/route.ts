// Demo stub for `POST /api/send-email`
// This route intentionally does not send external emails — it's safe for static/demo builds.
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    // Return a deterministic demo response and echo received payload (non-sensitive)
    return new Response(
      JSON.stringify({ message: "Demo mode — email not sent.", received: body }),
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
