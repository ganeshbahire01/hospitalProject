const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/User.routes");
const app = express();
const dotenv = require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.use("/users", userRouter);
// app.use("/admin", adminRouter);
// // app.use(auth);
// app.use("/blogs", blogRouter);
// app.use("/course", courseRoute);
// app.use("/test", qnaRouter);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected to DB");
  } catch (err) {
    console.log("DB connection error");
  }
  console.log(`Server is running at ${process.env.port}`);
});
