import mongoose from "mongoose";

//Function to connect to the mongodb database
export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);
    // mongoose.connection.on("connected", () =>
    //   console.log("Database Connected")
    // );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
