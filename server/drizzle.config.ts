import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';
import path from 'path';

config({
  path: path.resolve(__dirname, '../.env')
})

export default defineConfig({
  schema: "./src/database/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL!
  }
})