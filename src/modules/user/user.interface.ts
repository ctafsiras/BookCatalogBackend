import { ObjectId } from "mongoose";
import { IBook } from "../book/book.interface";

interface IWishList {
  bookId: ObjectId | IBook;
}
interface IReadingList {
  bookId: ObjectId | IBook;
  finished: boolean;
}
export interface IUser {
  name: string;
  username: string;
  password: string;
  wishList?: IWishList[];
  readingList?: IReadingList[];
}
