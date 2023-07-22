"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    wishList: [
        {
            type: String,
            ref: "Book",
        },
    ],
    readingList: [
        {
            bookId: {
                type: String,
            },
            finished: {
                type: Boolean,
                default: false,
            },
        },
    ],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});
exports.User = (0, mongoose_1.model)("User", userSchema);
