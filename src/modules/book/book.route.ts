import express from "express";
import { bookController } from "./book.controller";
const router = express.Router();

router.post("/create", bookController.createBook);
router.get("/recent", bookController.getRecentBooks);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getSingleBook);
router.patch("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

export const bookRoutes = router;
