import mongoose from "mongoose";

export const connectToDb = async (): Promise<void> => {
  try {
    const { DB_URL } = process.env;
    await mongoose.connect(`${DB_URL}/postAway_II`);
    console.log("Database is Connected via Mongoose !!");
  } catch (error) {
    console.log(error);
  }
};
