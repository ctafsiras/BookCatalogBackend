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
exports.userService = void 0;
const user_model_1 = require("./user.model");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.User.findOne({ username: user.username }).populate([
        {
            path: "wishList.bookId",
        },
        {
            path: "readingList.bookId",
        },
    ]);
    if (isExist) {
        throw new Error("Username already exist");
    }
    const newUser = user_model_1.User.create(user);
    return newUser;
});
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.User.findOne({ username: user.username }).populate([
        {
            path: "wishList.bookId",
        },
        {
            path: "readingList.bookId",
        },
    ]);
    if (!isExist) {
        throw new Error("Username doesnot exist");
    }
    if (isExist.password !== user.password) {
        throw new Error("Password is incorrect");
    }
    return isExist;
});
const addToWishList = (userId, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return yield user_model_1.User.findByIdAndUpdate(userId, {
        wishList: [...user.wishList, bookId],
    }, { new: true });
});
const addToReadingList = (userId, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    return yield user_model_1.User.findByIdAndUpdate(userId, {
        readinList: [...user.readingList, { bookId, finished: false }],
    }, { new: true });
});
const makeBookFinished = (userId, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    const readingList = user.readingList.map((book) => book.bookId.toString() === bookId && book.finished === true);
    return yield user_model_1.User.findByIdAndUpdate(userId, { readingList }, { new: true });
});
exports.userService = {
    createUser,
    loginUser,
    addToWishList,
    addToReadingList,
    makeBookFinished,
};
