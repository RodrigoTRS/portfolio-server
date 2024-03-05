import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3333),
  AWS_S3_BASE_URL: z.string(),
  AWS_S3_BUCKET_NAME: z.string(),
  AWS_ACCESS_KEY_ID: z.coerce.string(),
  AWS_SECRET_ACCESS_KEY: z.coerce.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid env variables", _env.error.format());
  throw new Error("Invalid env variables");
}

export const env = _env.data;
