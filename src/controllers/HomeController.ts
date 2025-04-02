import { Request, Response } from "express";
import BaseController from "./BaseController";
import { HttpStatus } from "@/types";

class HomeController extends BaseController{
    async index(req: Request, res: Response): Promise<void> {
        this.sendResponse(res, HttpStatus.OK, {
            message: 'Welcome!'
        });
    }

    // 403
    async forbidden(req: Request, res: Response): Promise<void> {
        this.sendResponse(res, HttpStatus.FORBIDDEN, {
            message: 'Forbidden!'
        });
    }
}

export default new HomeController();