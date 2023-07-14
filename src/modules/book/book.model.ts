import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    reviews: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        review: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

export const Book = model<IBook>("Book", bookSchema);
