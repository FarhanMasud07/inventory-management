import { Product, StockLocation, WareHouse } from "../../models/RootModel.js";

const createStockLocation = async (data) => {
  const { product_id } = data;

  const product = await Product.findByPk(product_id);
  if (!product) throw new Error("Product not found!");

  return StockLocation.create(data);
};

export { createStockLocation };
