import { Product } from "../../models/RootModel.js";

const getAllProducts = async (page = 1, limit = 10) => {
  return await Product.findAndCountAll({
    limit: parseInt(limit),
    offset: (parseInt(page) - 1) * parseInt(limit),
  });
};

const createProduct = async (productData) => {
  return await Product.create(productData);
};

const deleteProduct = async (id) => {
  return await Product.destroy({ where: { id } });
};

export { getAllProducts, createProduct, deleteProduct };
