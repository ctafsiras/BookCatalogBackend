import { ObjectId } from "mongoose";
import { IBook } from "../book/book.interface";

interface IReadingList {
  bookId: string;
  finished: boolean;
}
export interface IUser {
  name: string;
  username: string;
  password: string;
  wishList?: string[];
  readingList?: IReadingList[];
}
