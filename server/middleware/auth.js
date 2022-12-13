import Users from "../models/userModel";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(404).json({ msg: "Ошибка Авторизации" });

    const decoded = jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`);
    if (!decoded) return res.status(404).json({ msg: "Ошибка Авторизации" });

    const user = await Users.findOne({ _id: decoded.id }).select("-password");
    if (!user) return res.status(400).json({ msg: "Нет такого пользователя" });

    req.user = user;

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export default auth;
