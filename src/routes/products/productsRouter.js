import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import productsController from './productsController.js'
import productsSchema from "../../middleware/productsSchema";

const route = Router();

route.post('/', productsSchema.insert, productsController.insert);

export default route;