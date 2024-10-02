import mongoose from "mongoose";

/* Repository */
export type User = {
  _id?: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  password: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  profileImage?: string;
};

export type UserFilter = {
  email: string;
};
export type PassParams = {
  email: string;
  newPassword: string;
};

export type OtpParams = {
  email: string;
  otp?: string;
};

/* Controller */
