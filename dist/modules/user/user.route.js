"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post("/signup", user_controller_1.userController.createUser);
router.post("/login", user_controller_1.userController.loginUser);
router.post("/addToWishList", user_controller_1.userController.addToWishList);
router.post("/addToReadingList", user_controller_1.userController.addToReadingList);
router.post("/makeBookFinished", user_controller_1.userController.makeBookFinished);
exports.userRoutes = router;
