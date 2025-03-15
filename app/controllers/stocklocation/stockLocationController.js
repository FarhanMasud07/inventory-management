import { createStockLocation } from "../../services/stocklocation/stockLocationService.js";

const addStockLocation = async (req, res, next) => {
  try {
    const stockLocation = await createStockLocation(req.body);
    res.status(201).json(stockLocation);
  } catch (err) {
    next(err);
  }
};

export { addStockLocation };
