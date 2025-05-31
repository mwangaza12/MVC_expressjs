import "dotenv/config";
 
import {defineConfig} from "drizzle-kit";
 
export default defineConfig({
    dialect: "postgresql",
    schema: "./src/models/drizzle/schema.ts",
    out: "./src/models/drizzle/migrations",
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true,
});