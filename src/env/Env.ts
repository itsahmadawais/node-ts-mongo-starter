import { defineEnvSchema } from "typed-env-safe";

const Env = defineEnvSchema({
  PORT: {
    type: "number",
    default: 4001,
  },
  SALT_FACTOR: {
    type: "number",
    default: 10,
  },
  MONGODB_URI: {
    type: "string",
    required: true,
  },
  NODE_ENV: {
    type: "string",
    default: "development",
    choices: ["development", "production", "test"],
  },
  ACCESS_TOKEN_SECRET: {
    type: "string",
    default: "defaultAccessTokenSecret",
  },
  REFRESH_TOKEN_SECRET: {
    type: "string",
    default: "defaultRefreshTokenSecret",
  },
  ACCESS_TOKEN_EXPIRY: {
    type: "string",
    default: "365d",
  },
  REFRESH_TOKEN_EXPIRY: {
    type: "string",
    default: "7d",
  },
});

export default Env;
