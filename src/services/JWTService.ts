import Env from "@/env/Env";
import { UserDocument } from "@/types";
import jwt from "jsonwebtoken";

class JWTService {

    static generateAccessToken(payload: Partial<UserDocument>): string {
        return jwt.sign(payload, Env.ACCESS_TOKEN_SECRET, { expiresIn: Env.ACCESS_TOKEN_EXPIRY });
    }

    static generateRefreshToken(payload: Partial<UserDocument>): string {
        return jwt.sign(payload, Env.REFRESH_TOKN_SECRET, { expiresIn: Env.REFRESH_TOKEN_EXPIRY });
    }

    static verifyAccessToken(token: string): any {
        return jwt.verify(token, Env.ACCESS_TOKEN_SECRET);
    }

    static verifyRefreshToken(token: string): any {
        return jwt.verify(token, Env.REFRESH_TOKN_SECRET);
    }
}

export default JWTService;