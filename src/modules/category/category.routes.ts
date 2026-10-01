import { Router } from "express";
import categoryController from "./category.controller.js";
// chamar controller

const CategoryRoutes = Router();

CategoryRoutes.post('/', categoryController.create);
CategoryRoutes.get('/', categoryController.findAll);
CategoryRoutes.get('/:id', categoryController.findAll);

export default CategoryRoutes;