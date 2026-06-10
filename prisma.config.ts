import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // @ts-ignore - Bypasses the strict compiler check for process.env outside of /src
    url: process.env.DATABASE_URL,
  },
});