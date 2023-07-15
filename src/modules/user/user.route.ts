import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/addToWishList", userController.addToWishList);
router.post("/addToReadingList", userController.addToReadingList);
router.post("/makeBookFinished", userController.makeBookFinished);

export const userRoutes = router;
