import { Document, Types, Schema } from "mongoose";

export interface SampleDocument extends Document {
    name: string;
}

export interface UserDocument extends Document {
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
    password: string;
    otp: number | null;
    otpExpiryDate: Date | null;
    isBanned: boolean;
    passwordMustBeChanged: boolean;
    avatar: string;
    comparePassword(requestPassword: string): Promise<boolean>;
}