import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/parking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected!"))
  .catch((error) => console.log(error));
