import express from "express";
const app = express();
import cors from "cors";
import { userRoutes } from "./modules/user/user.route";
import { bookRoutes } from "./modules/book/book.route";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/book", bookRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
