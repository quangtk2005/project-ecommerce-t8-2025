import mongoose from "mongoose";

export const mongodbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Kết nối database thành công!");
  } catch (error) {
    console.log("Kết nối database thất bại!");
  }
}