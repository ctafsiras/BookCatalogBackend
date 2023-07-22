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
  if (user.wishList?.includes(bookId)) {
    throw new Error("Book already in wishlist");
  }
  user.wishList = [...user.wishList!, bookId];
  console.log(user);
  return await User.findByIdAndUpdate(userId, user, { new: true });
};

const addToReadingList = async (userId: string, bookId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  if (
    user.readingList?.some(
      (book) =>
        (book.bookId === bookId && book.finished === false) ||
        book.finished === true
    )
  ) {
    throw new Error("Book already in wishlist");
  }
  user.readingList = [...user.readingList!, { bookId, finished: false }];
  return await User.findByIdAndUpdate(userId, user, { new: true });
};

const makeBookFinished = async (userId: string, bookId: string) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  user.readingList = user.readingList?.map((book) =>
    book.bookId === bookId ? { ...book, finished: true } : book
  );
  return await User.findByIdAndUpdate(userId, user, { new: true });
};
export const userService = {
  createUser,
  loginUser,
  addToWishList,
  addToReadingList,
  makeBookFinished,
};
