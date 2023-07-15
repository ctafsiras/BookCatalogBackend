import { NextFunction, Request, RequestHandler, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { userService } from "./user.service";

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const userData = req.body;
    const user = await userService.createUser(userData);
    res.status(201).json({
      status: "success",
      data: user,
    });
  }
);
const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const loginData = req.body;
    const user = await userService.loginUser(loginData);
    res.status(200).json({
      status: "success",
      data: user,
    });
  }
);

const addToWishList: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId, bookId } = req.body;
    const user = await userService.addToWishList(userId, bookId);
    res.status(200).json({
      status: "success",
      data: user,
    });
  }
);

const addToReadingList: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId, bookId } = req.body;
    const user = await userService.addToReadingList(userId, bookId);
    res.status(200).json({
      status: "success",
      data: user,
    });
  }
);

const makeBookFinished: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId, bookId } = req.body;
    const user = await userService.makeBookFinished(userId, bookId);
    res.status(200).json({
      status: "success",
      data: user,
    });
  }
);

export const userController = {
  createUser,
  loginUser,
  addToWishList,
  addToReadingList,
  makeBookFinished,
};
