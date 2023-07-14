import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    wishList: [
      {
        bookId: {
          type: Schema.Types.ObjectId,
          ref: "Book",
        },
      },
    ],
    readingList: [
      {
        bookId: {
          type: Schema.Types.ObjectId,
          ref: "Book",
        },
        finished: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export const User = model<IUser>("User", userSchema);
