import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (user: IUser) => {
  const isExist = await User.findOne({ username: user.username }).populate([
    {
      path: "wishList.bookId",
    },
    {
      path: "readingList.bookId",
    },
  ]);
  if (isExist) {
    throw new Error("Username already exist");
  }
  const newUser = User.create(user);
  return newUser;
};

const loginUser = async (user: Partial<IUser>) => {
  const isExist = await User.findOne({ username: user.username }).populate([
    {
      path: "wishList.bookId",
    },
    {
      path: "readingList.bookId",
    },
  ]);
  if (!isExist) {
    throw new Error("Username doesnot exist");
  }
  if (isExist.password !== user.password) {
    throw new Error("Password is incorrect");
  }
  return isExist;
};

const addToWishList = async (userId: string, bookId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return await User.findByIdAndUpdate(
    userId,
    {
      wishList: [...user.wishList!, bookId],
    },
    { new: true }
  );
};

const addToReadingList = async (userId: string, bookId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return await User.findByIdAndUpdate(
    userId,
    {
      readinList: [...user.readingList!, { bookId, finished: false }],
    },
    { new: true }
  );
};

const makeBookFinished = async (userId: string, bookId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const readingList = user.readingList!.map(
    (book) => book.bookId.toString() === bookId && book.finished === true
  );
  return await User.findByIdAndUpdate(userId, { readingList }, { new: true });
};
export const userService = {
  createUser,
  loginUser,
  addToWishList,
  addToReadingList,
  makeBookFinished,
};
