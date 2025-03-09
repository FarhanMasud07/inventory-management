import { Category } from "../../models/RootModel.js";

const createCategory = async (categoryData) => {
  return await Category.create(categoryData);
};

export { createCategory };
