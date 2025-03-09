import { createCategory } from "../../services/category/categoryService.js";

const addCategory = async (req, res, next) => {
  try {
    const category = await createCategory(req.body);
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

export { addCategory };
