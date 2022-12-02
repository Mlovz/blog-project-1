require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
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
    origin: "http://localhost:3000",
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порте ${PORT}...`);
});
