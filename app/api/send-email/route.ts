

export async function POST(request: Request) {
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
