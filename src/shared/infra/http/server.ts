import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';
import cors from 'cors';

import '@shared/infra/typeorm';

import '@shared/providers';

import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({ error: err.message});
  }

  return response.status(500).json({ status: "error", message: "Internal Server Error"});
})

app.listen(process.env.PORT || 3333, () => console.log(`Server listening on port ${process.env.PORT}`));