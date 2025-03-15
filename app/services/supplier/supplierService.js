import { Supplier } from "../../models/RootModel.js";

const createSupplier = async (supplier) => {
  const { supplier_email } = supplier;
  const isExist = await Supplier.findOne({ where: { supplier_email } });
  if (isExist) throw new Error("This supplier already exist!");
  return await Supplier.create(supplier);
};
export { createSupplier };
