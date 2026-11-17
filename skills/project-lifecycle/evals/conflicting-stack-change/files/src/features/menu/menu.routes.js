import { Router } from 'express';
import * as menuService from './menu.service.js';

export const menuRouter = Router();

menuRouter.get('/', (req, res) => {
  res.json({ data: menuService.listMenuItems() });
});

menuRouter.post('/', (req, res, next) => {
  try {
    const item = menuService.createMenuItem({ name: req.body.name, price: req.body.price });
    res.status(201).json({ data: item });
  } catch (err) {
    next(err);
  }
});
