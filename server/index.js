require("dotenv").config();
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes";
const app = express();
// const SocketServer = require("./socketServer.js");

// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

// io.on("connection", (socket) => {
//   SocketServer(socket);
// });

//middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: "https://belxi.ru",
    credentials: true,
  })
);

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));s
app.use(cookieParser());

//routes

const uri = process.env.DB;

mongoose.connect(uri, {}, (err) => {
  if (err) throw Error;
  console.log("Успешное подключение к БД!");
});

app.use("/api", routes.auth);
app.use("/api", routes.article);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}...`);
});
