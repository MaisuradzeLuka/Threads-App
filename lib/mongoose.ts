import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) throw new Error("MONGODB_URL not found");
  if (isConnected) return console.log("Already connected to db");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};
