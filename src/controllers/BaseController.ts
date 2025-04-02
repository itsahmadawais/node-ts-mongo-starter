import { Request, Response } from "express";
import mongoose from "mongoose";
import { ErrorDetails, HttpStatus } from "@/types";
import Env from "@/env/Env";

export default class BaseController {
    protected sendResponse(res: Response, statusCode: HttpStatus = HttpStatus.OK, data: any) {
        res.status(statusCode as number).json(data);
    }

    protected sendError(res: Response, error: ErrorDetails | any) {
        let errorDetails: ErrorDetails;

        if(Env.NODE_ENV === 'development') console.log(error);

        // Check if the error is already an instance of ErrorDetails
        if (error && typeof error.statusCode === 'number' && typeof error.message === 'string') {
            errorDetails = error;  // It's an ErrorDetails-like object
        }

        // Handle Mongoose validation errors
        else if (error instanceof mongoose.Error.ValidationError) {
            errorDetails = {
                statusCode: HttpStatus.BAD_REQUEST,
                message: `Validation Error: ${error.message}`,
            };
        }
        // Handle Mongoose document not found error
        else if (error instanceof mongoose.Error.DocumentNotFoundError) {
            errorDetails = {
                statusCode: HttpStatus.NOT_FOUND,
                message: "Document not found",
            };
        }
        // Handle Mongoose cast error
        else if (error instanceof mongoose.Error.CastError) {
            errorDetails = {
                statusCode: HttpStatus.BAD_REQUEST,
                message: `Cast Error: ${error.message}`,
            };
        }
        // Handle other general JavaScript errors
        else if (error instanceof Error) {
            errorDetails = {
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            };
        }
        // Fallback for unknown errors
        else {
            errorDetails = {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "An unknown error occurred!",
            };
        }

        // Send the error response
        res.status(errorDetails.statusCode).json({
            message: errorDetails.message,
            stack: process.env.NODE_ENV === 'development' ? errorDetails.stack : undefined, // Include stack trace only in development
        });
    }

    // Get All Records
    async index(req: Request, res: Response): Promise<void> {
        res.status(HttpStatus.NOT_IMPLEMENTED).json({
            message: "Not Implemented",
        });
    }

    // Get Record By Id
    async getById(req: Request, res: Response): Promise<void> {
        res.status(HttpStatus.NOT_IMPLEMENTED).json({
            message: "Not Implemented",
        });
    }

    // Create New
    async create(req: Request, res: Response): Promise<void> {
        res.status(HttpStatus.NOT_IMPLEMENTED).json({
            message: "Not Implemented",
        });
    }

    // Update By Id
    async updateById(req: Request, res: Response): Promise<void> {
        res.status(HttpStatus.NOT_IMPLEMENTED).json({
            message: "Not Implemented",
        });
    }

    // Delete By Id
    async deleteById(req: Request, res: Response): Promise<void> {
        res.status(HttpStatus.NOT_IMPLEMENTED).json({
            message: "Not Implemented",
        });
    }
}