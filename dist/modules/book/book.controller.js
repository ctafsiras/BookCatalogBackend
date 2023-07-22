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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const book_service_1 = require("./book.service");
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = req.body;
    const book = yield book_service_1.bookService.createBook(bookData);
    res.status(201).json({
        status: "success",
        data: book,
    });
}));
const getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filterOptions = req.query;
    const books = yield book_service_1.bookService.getAllBooks(filterOptions);
    res.status(200).json({
        status: "success",
        data: books,
    });
}));
const getRecentBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_service_1.bookService.getRecentBooks();
    res.status(200).json({
        status: "success",
        data: books,
    });
}));
const getSingleBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const book = yield book_service_1.bookService.getSingleBook(id);
    res.status(200).json({
        status: "success",
        data: book,
    });
}));
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedBook = req.body;
    const book = yield book_service_1.bookService.updateBook(id, updatedBook);
    res.status(200).json({
        status: "success",
        data: book,
    });
}));
const addReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { review } = req.body;
    const book = yield book_service_1.bookService.addReview(id, review);
    res.status(200).json({
        status: "success",
        data: book,
    });
}));
const deleteBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const book = yield book_service_1.bookService.deleteBook(id);
    res.status(200).json({
        status: "success",
        data: book,
    });
}));
exports.bookController = {
    createBook,
    getAllBooks,
    getRecentBooks,
    getSingleBook,
    updateBook,
    addReview,
    deleteBook,
};
