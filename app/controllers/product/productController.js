import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from "../../services/product/productService.js";

const getProducts = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const product = await getAllProducts(page, limit);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    console.log(req.body);
    const product = await createProduct(req.body);
    res.json(product);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return next(new Error("Product with this name already exists"));
    }
    next(err);
  }
};

const removeProduct = async (req, res, next) => {
  try {
    const deleted = await deleteProduct(req.params.id);
    res.json({ deletedID: req.params.id, success: !!deleted });
  } catch (err) {
    next(err);
  }
};

export { getProducts, addProduct, removeProduct };
