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
exports.userController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const user_service_1 = require("./user.service");
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const user = yield user_service_1.userService.createUser(userData);
    res.status(201).json({
        status: "success",
        data: user,
    });
}));
const loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginData = req.body;
    const user = yield user_service_1.userService.loginUser(loginData);
    res.status(200).json({
        status: "success",
        data: user,
    });
}));
const addToWishList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, bookId } = req.body;
    const user = yield user_service_1.userService.addToWishList(userId, bookId);
    res.status(200).json({
        status: "success",
        data: user,
    });
}));
const addToReadingList = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, bookId } = req.body;
    const user = yield user_service_1.userService.addToReadingList(userId, bookId);
    res.status(200).json({
        status: "success",
        data: user,
    });
}));
const makeBookFinished = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, bookId } = req.body;
    const user = yield user_service_1.userService.makeBookFinished(userId, bookId);
    res.status(200).json({
        status: "success",
        data: user,
    });
}));
exports.userController = {
    createUser,
    loginUser,
    addToWishList,
    addToReadingList,
    makeBookFinished,
};
