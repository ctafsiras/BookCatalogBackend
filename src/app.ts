import express from "express";
const app = express();
import cors from "cors";
import { userRoute } from "./modules/user/user.route";

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
