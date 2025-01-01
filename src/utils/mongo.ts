
import mongoose from 'mongoose';

export const objectIdValidator = (value: any, helpers: any) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.error("any.invalid");
    }
    return value;
};

export const isObjectId = (value: any): boolean => {
    return mongoose.isValidObjectId(value);
};

export const toObjectId = (value: any): mongoose.Types.ObjectId | any => {
    if (isObjectId(value)) {
        return new mongoose.Types.ObjectId(value);
    }
    throw new Error(`Invalid ObjectId: ${value}`);
};