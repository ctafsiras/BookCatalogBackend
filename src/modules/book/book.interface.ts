import {ObjectId} from "mongoose";
import {IUser} from "../user/user.interface";

interface IReview {
  userId: ObjectId | IUser;
  review: string;
}
export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  reviews?: IReview[];
}

