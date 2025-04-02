import bcrypt from "bcrypt";
import otpGenerator from 'otp-generator';
import Env from '@/env/Env';
const crypto = require('crypto');

export const passwordHashGenerator = async (password: string): Promise<string> => {
    const saltFactor = Env.SALT_FACTOR;
    const salt = await bcrypt.genSalt(saltFactor);
    return bcrypt.hash(password, salt);
};

export const isPasswordSame = async (requestPassword: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(requestPassword, hashedPassword);
};

export const omitPropertyFromObject = (obj: any, ...keys: string[]) => {
    const result = { ...obj };
    keys.forEach(key => {
        delete result[key];
    });
    return result;
};

export const generateOtp = (): string  =>{
    return otpGenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
}

export const generatePassword = (length: number): string => {
    return crypto.randomBytes(length)
        .toString('base64')
        .slice(0, length);
}

export const isOtpExpired = (otpExpiryDate: Date): boolean => {
    return new Date().getTime() > new Date(otpExpiryDate).getTime();
};