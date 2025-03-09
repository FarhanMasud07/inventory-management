import { createUser } from "../../services/user/userService.js";

const addUser = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export { addUser };
