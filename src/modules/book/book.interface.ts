import {ObjectId} from "mongoose";
import {IUser} from "../user/user.interface";

interface IReview {
  userId: ObjectId | IUser;
  review: string;
}
export interface IBook {
  title: string;
  author: string;
  publicationDate: Date;
  reviews?: IReview[];
}
