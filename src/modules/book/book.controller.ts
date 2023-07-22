import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { Book } from "./book.model";
import { bookService } from "./book.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const bookData = req.body;
  const book = await bookService.createBook(bookData);
  res.status(201).json({
    status: "success",
    data: book,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filterOptions = req.query;
  const books = await bookService.getAllBooks(filterOptions);
  res.status(200).json({
    status: "success",
    data: books,
  });
});
const getRecentBooks = catchAsync(async (req: Request, res: Response) => {
  const books = await bookService.getRecentBooks();
  res.status(200).json({
    status: "success",
    data: books,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await bookService.getSingleBook(id);
  res.status(200).json({
    status: "success",
    data: book,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedBook = req.body;
  const book = await bookService.updateBook(id, updatedBook);
  res.status(200).json({
    status: "success",
    data: book,
  });
});
const addReview = catchAsync(async (req: Request, res: Response) => {
  const { id, review } = req.body;
  const book = await bookService.updateBook(id, review);
  res.status(200).json({
    status: "success",
    data: book,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await bookService.deleteBook(id);
  res.status(200).json({
    status: "success",
    data: book,
  });
});

export const bookController = {
  createBook,
  getAllBooks,
  getRecentBooks,
  getSingleBook,
  updateBook,
  addReview,
  deleteBook,
};
