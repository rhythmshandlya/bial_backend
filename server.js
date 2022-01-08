const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const app = require("./app");

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("DATABASE CONNECTED");
});
app.listen(process.env.PORT || 8000, () => {
  console.log(`Api running on ${process.env.PORT}`);
});
