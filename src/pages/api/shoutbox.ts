import type { APIRoute } from 'astro';
import { db, Shoutbox } from 'astro:db';

// GET request to retrieve all messages from the Shoutbox
export const GET: APIRoute = async () => {
  try {
    // Fetch all rows from the Shoutbox table
    const messages = await db.select().from(Shoutbox).all();
    
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

// POST request to add a new message to the Shoutbox
export const POST: APIRoute = async ({ request }) => {
  try {
    const { player_name, message } = await request.json();
    
    // Insert the new message into the Shoutbox table
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
