/* eslint-disable prettier/prettier */
import { config } from "dotenv";
config()

export const jwtConstants = {
    secret: process.env.SECRET_KEY_JWT, // This should be stored in an environment variable
  };