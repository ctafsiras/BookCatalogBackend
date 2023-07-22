import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBook) => {
  return await Book.create(book);
};
const getAllBooks = async (filterOptions: Partial<IBook>) => {
  const books = await Book.find({});
  return books;
};
const getRecentBooks = async () => {
  const books = await Book.find().sort({ createdAt: -1 }).limit(10);
  return books;
};

const getSingleBook = async (id: string) => {
  return await Book.findById(id);
};

const updateBook = async (id: string, updatedBook: Partial<IBook>) => {
  return await Book.findByIdAndUpdate(id, updatedBook, { new: true });
};

const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};

export const bookService = {
  createBook,
  getAllBooks,
  getRecentBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
