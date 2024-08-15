import { type Config } from "drizzle-kit"

export default {
  dialect: 'postgresql',
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations/",
} satisfies Config;