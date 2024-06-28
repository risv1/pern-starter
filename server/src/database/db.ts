import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { config } from "dotenv";
import path from "path";

config({
    path: path.resolve(__dirname, "../../../.env")
});

const client = postgres(process.env.DB_URL!);
export const db = drizzle(client);