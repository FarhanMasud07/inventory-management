import express from "express";
import { addCategory } from "../controllers/category/categoryController.js";

const categoryRoutes = express.Router();
categoryRoutes.post("/add", addCategory);

export default categoryRoutes;
