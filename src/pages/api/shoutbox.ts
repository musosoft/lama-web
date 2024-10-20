import { turso } from '../../turso';

export const GET = async () => {
  try {
    const { rows } = await turso.execute('SELECT * FROM Shoutbox');  // Fetch all rows from the Shoutbox table
    console.log("Data from database:", rows);  // Debugging output
    return new Response(JSON.stringify(rows), {
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

export const POST = async ({ request }: { request: Request }) => {
  try {
    const { player_name, message } = await request.json();
    await turso.execute({
      sql: `INSERT INTO Shoutbox (player_name, message, timestamp) VALUES (?, ?, ?)`,
      args: [player_name, message, new Date().toISOString()],
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