import { config } from "dotenv";

config();

export const MOVIE_API = {
  API_URL: process.env.MOVIE_API_URL,
  API_KEY: process.env.MOVIE_API_KEY,
};

export const SERVER = {
  PORT: process.env.PORT || 3000,
};

export const DATABASE = {
  URL: process.env.DATABASE_URL,
};

export const JWT = {
  SECRET: process.env.JWT_SECRET,
};
