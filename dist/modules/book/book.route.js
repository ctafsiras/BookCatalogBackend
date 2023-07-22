"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/create", book_controller_1.bookController.createBook);
router.get("/recent", book_controller_1.bookController.getRecentBooks);
router.get("/", book_controller_1.bookController.getAllBooks);
router.get("/:id", book_controller_1.bookController.getSingleBook);
router.patch("/:id", book_controller_1.bookController.updateBook);
router.patch("/", book_controller_1.bookController.addReview);
router.delete("/:id", book_controller_1.bookController.deleteBook);
exports.bookRoutes = router;
