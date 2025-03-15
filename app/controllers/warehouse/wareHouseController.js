import { createWareHouse } from "../../services/warehouse/wareHouseService.js";

const addWareHouse = async (req, res, next) => {
  try {
    const wareHouse = await createWareHouse(req.body);
    res.status(201).json(wareHouse);
  } catch (err) {
    next(err);
  }
};

export { addWareHouse };
