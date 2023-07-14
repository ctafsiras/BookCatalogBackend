import app from "./app";
import mongoose from "mongoose";

const port = process.env.PORT || 5000;
app.listen(port, () => {
  async function main() {
    await mongoose.connect(
      "mongodb+srv://db:db@cluster0.dbyzuki.mongodb.net/BookCatalog?retryWrites=true&w=majority"
    );
  }
  main().catch((err) => console.log(err));

  console.log(`Example app listening on port ${port}`);
});
