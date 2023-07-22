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
    var _a;
    const user = yield user_model_1.User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    if ((_a = user.wishList) === null || _a === void 0 ? void 0 : _a.includes(bookId)) {
        throw new Error("Book already in wishlist");
    }
    user.wishList = [...user.wishList, bookId];
    console.log(user);
    return yield user_model_1.User.findByIdAndUpdate(userId, user, { new: true });
});
const addToReadingList = (userId, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const user = yield user_model_1.User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    if ((_b = user.readingList) === null || _b === void 0 ? void 0 : _b.some((book) => (book.bookId === bookId && book.finished === false) ||
        book.finished === true)) {
        throw new Error("Book already in wishlist");
    }
    user.readingList = [...user.readingList, { bookId, finished: false }];
    return yield user_model_1.User.findByIdAndUpdate(userId, user, { new: true });
});
const makeBookFinished = (userId, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const user = yield user_model_1.User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    user.readingList = (_c = user.readingList) === null || _c === void 0 ? void 0 : _c.map((book) => book.bookId === bookId ? Object.assign(Object.assign({}, book), { finished: true }) : book);
    return yield user_model_1.User.findByIdAndUpdate(userId, user, { new: true });
});
exports.userService = {
    createUser,
    loginUser,
    addToWishList,
    addToReadingList,
    makeBookFinished,
};
