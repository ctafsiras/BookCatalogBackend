import app from "./app";
import mongoose from "mongoose";
const port = process.env.PORT || 5000;

const serverConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://db:db@cluster0.dbyzuki.mongodb.net/BookCatalog?retryWrites=true&w=majority"
    );
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

serverConnect();
