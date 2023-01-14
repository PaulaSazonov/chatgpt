import * as dotenv from 'dotenv';

dotenv.config();

declare const process: {
  env: {
    OPENAI_EMAIL: string;
    OPENAI_PASSWORD: string;
  };
};

export const { OPENAI_EMAIL, OPENAI_PASSWORD } = process.env;
