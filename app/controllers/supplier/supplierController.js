import { createSupplier } from "../../services/supplier/supplierService.js";

const addSupplier = async (req, res, next) => {
  try {
    const supplier = await createSupplier(req.body);
    res.status(201).json(supplier);
  } catch (err) {
    next(err);
  }
};
export { addSupplier };
