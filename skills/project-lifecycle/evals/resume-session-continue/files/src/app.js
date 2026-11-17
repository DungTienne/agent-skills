import express from 'express';
import { menuRouter } from './features/menu/menu.routes.js';
import { errorHandler } from './lib/errors.js';

export const app = express();
app.use(express.json());
app.use('/api/menu-items', menuRouter);
app.use(errorHandler);
