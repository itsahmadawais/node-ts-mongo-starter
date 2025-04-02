
import mongoose, { Schema } from "mongoose";
import { SampleDocument } from "@/types";
import { MODELS } from "@/constants";

const documentSchema: Schema<SampleDocument> = new Schema({
   name: { type: String}
}, {
    timestamps: true
});

const SampleModel = mongoose.model<SampleDocument>(MODELS.SAMPLE, documentSchema);

export default SampleModel;