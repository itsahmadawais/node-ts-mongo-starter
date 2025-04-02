import { Request, Response } from "express";
import BaseController from "./BaseController";
import { signupPayloadValidator, loginPayloadValidator } from "@/validators";
import { HttpStatus, UserDocument } from "@/types";
import { JWTService, UserService } from "@/services";

class UserController extends BaseController {

    async register(req: Request, res: Response): Promise<void> {
        try {
            const { error, value } = await signupPayloadValidator.validateAsync(req.body, { abortEarly: false });

            if (error) {
                this.sendError(res, {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Validation failed',
                    details: error.details,
                });
                return;
            }

            const user: UserDocument | null = await UserService.findUserByEmail(value.email);

            if (user) {
                this.sendError(res, {
                    statusCode: HttpStatus.DUPLICATE_DATA,
                    message: 'User with the same email already exists!',
                });
                return;
            }

            await UserService.createUser(value);

            this.sendResponse(res, HttpStatus.CREATED, {
                message: 'Account successfully created!',
            });

        } catch (error) {
            this.sendError(res, error);
        }
    }


    async login(req: Request, res: Response): Promise<void> {
        try {
            const { error, value } = await loginPayloadValidator.validateAsync(req.body, { abortEarly: false });

            if (error) {
                this.sendError(res, {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Validation failed',
                    details: error.details,
                });
                return;
            }

            const user: UserDocument | null = await UserService.findUserByEmail(value.email);

            if (!user) {
                throw new Error('Invalid email or password!');
            }

            if(!await user.comparePassword(value.password)){
                throw new Error('Invalid email or password!');
            }

            const tokenPayload = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            };

            const data = {
                ...user.toObject(),
                token: JWTService.generateAccessToken(tokenPayload),
                refreshToken: JWTService.generateRefreshToken(tokenPayload),
            }

            this.sendResponse(res, HttpStatus.OK, data);

        } catch (error) {
            this.sendError(res, error);
        }
    }

}

export default new UserController();