// ✅ Only define and export the function — don't call it here!
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(` MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB; // ✅ no connectDB() here
