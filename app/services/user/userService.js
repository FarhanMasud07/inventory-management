import { User } from "../../models/RootModel.js";

const createUser = async ({ name, email, password }) => {
  const existUser = await User.findOne({ where: { email } });
  if (existUser) throw new Error("User already exist!");
  return await User.create({ name, email, password });
};

export { createUser };
