import { Router } from "express";
import categoryController from "./category.controller.js";
// chamar controller

const CategoryRoutes = Router();

CategoryRoutes.post('/', categoryController.create);

export default CategoryRoutes;