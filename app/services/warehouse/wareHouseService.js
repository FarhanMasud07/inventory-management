import { WareHouse } from "../../models/RootModel.js";

const createWareHouse = async (data) => {
  return await WareHouse.create(data);
};

export { createWareHouse };
