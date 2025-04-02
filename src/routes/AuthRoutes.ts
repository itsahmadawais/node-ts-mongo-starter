import express, { Router } from "express";
import { UserController as Controller } from "@/controllers";

const router: Router = express.Router()

router.post("/login", Controller.login.bind(Controller));

router.get("/register", Controller.register.bind(Controller));

export default router;