"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const book_model_1 = require("./book.model");
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.create(book);
});
const getAllBooks = (filterOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_model_1.Book.find({});
    return books;
});
const getRecentBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_model_1.Book.find().sort({ createdAt: -1 }).limit(10);
    return books;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.findById(id);
});
const updateBook = (id, updatedBook) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.findByIdAndUpdate(id, updatedBook, { new: true });
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.Book.findByIdAndDelete(id);
});
exports.bookService = {
    createBook,
    getAllBooks,
    getRecentBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
