import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Replace postgres, password, localhost, 5432, and your_db_name with your actual Postgres details
      url: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public",
  },
});