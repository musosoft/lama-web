import { db, Shoutbox } from 'astro:db';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const messages = await db.select(Shoutbox).orderBy(Shoutbox.columns.timestamp).all();
    return new Response(JSON.stringify(messages), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch messages' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const { player_name, message } = await request.json();
    await db.insert(Shoutbox).values({
      player_name,
      message,
      timestamp: new Date(),
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to save message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
