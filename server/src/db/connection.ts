import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env.ts";
import { schema } from "./schema/index.ts";

export const sql = postgres(env.DB_HOST);
export const db = drizzle(sql, {
  schema,
  casing: "snake_case",
});
