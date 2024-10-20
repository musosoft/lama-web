// db/seed.ts
import { db, Shoutbox } from 'astro:db';

export default async function () {
  await db.insert(Shoutbox).values([
    { player_name: 'Player1', message: 'Hello World!', timestamp: new Date() },
    { player_name: 'Player2', message: 'Welcome to the server!', timestamp: new Date() },
  ]);
}
