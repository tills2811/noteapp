import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// for not creating new collection everytime we reload the page
neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined.");
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);
