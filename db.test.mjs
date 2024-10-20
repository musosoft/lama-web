import { createClient } from "@libsql/client/web";

const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_AUTH_TOKEN,
});

(async () => {
  try {
    const result = await client.execute("SELECT 1");
    console.log("Connected successfully", result);
  } catch (error) {
    console.error("Failed to connect to Turso DB", error);
  }
})();
