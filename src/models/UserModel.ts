import mongoose, { Schema, CallbackError } from "mongoose";
import { UserDocument } from "@/types";
import { isPasswordSame, passwordHashGenerator } from "../utils";
import { MODELS } from "@/constants";

const UserSchema: Schema<UserDocument> = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  avatar: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    required: true,
  },
  passwordMustBeChanged: {
    type: Boolean,
    default: false
  },
  otp: {
    type: Number,
    default: null,
  },
  otpExpiryDate: {
    type: Date,
    default: null,
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
});

// Middleware to hash password before saving
UserSchema.pre<UserDocument>("save", async function (next: (err?: CallbackError) => void) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await passwordHashGenerator(this.password);
    return next();
  } catch (error) {
    return next(error as CallbackError); // Ensure the error is typed correctly
  }
});

// Add the comparePassword method to the schema
UserSchema.methods.comparePassword = async function (requestPassword: string): Promise<boolean> {
  return await isPasswordSame(requestPassword, this.password);
};

const UserModel = mongoose.model<UserDocument>(MODELS.USERS, UserSchema);

export default UserModel;