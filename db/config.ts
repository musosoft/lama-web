// db/config.ts
import { defineDb, defineTable, column } from 'astro:db';

const Shoutbox = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    player_name: column.text(),
    message: column.text(),
    timestamp: column.date(),
  },
});

export default defineDb({
  tables: { Shoutbox },
});
