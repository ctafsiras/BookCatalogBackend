import { ObjectId } from "mongoose";
import { IUser } from "../user/user.interface";

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  reviews?: string[];
}
