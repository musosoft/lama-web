// db/seed.ts
import { db, Shoutbox } from 'astro:db';

export default async function () {
  await db.insert(Shoutbox).values([
    { player_name: 'Player1', message: 'Hello, world!', timestamp: new Date() },
    { player_name: 'Player2', message: 'Hi there!', timestamp: new Date() },
  ]);
}
