//middleware is the function that is executed before executing the controller function
//using this middleware, we can protect our routes so if the user is authenticated then only they can access the particular api endpoint

import User from "../models/User.js";
import jwt from "jsonwebtoken";

//Middleware to protect routes
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("DECODED:", decoded);
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);

    res.json({ success: false, message: error.message });
  }
};
