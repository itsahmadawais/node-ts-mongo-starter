import express, { Router } from "express";
import { HomeController as Controller } from "@/controllers";

const router: Router = express.Router()

router.get("/", Controller.index.bind(Controller));

router.get("/403", Controller.forbidden.bind(Controller));

export default router;