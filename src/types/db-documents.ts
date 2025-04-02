import { Document, Types } from "mongoose";

export interface SampleDocument extends Document {
    name: string;
}