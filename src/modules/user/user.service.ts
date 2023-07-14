import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (user: IUser) => {
  const isExist = await User.findOne({ username: user.username });
  if (isExist) {
    throw new Error("Username already exist");
  }
  const newUser = User.create(user);
  return newUser;
};

const loginUser = async (user: Partial<IUser>) => {
  const isExist = await User.findOne({ username: user.username });
  if (!isExist) {
    throw new Error("Username doesnot exist");
  }
  if (isExist.password !== user.password) {
    throw new Error("Password is incorrect");
  }
  return isExist;
};

export const userService = {
  createUser,
  loginUser,
};
