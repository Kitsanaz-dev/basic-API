import { Router } from "express";
import userRouter from "./user_router.js";
import pageRouter from "./page_router.js";

const router = Router();

userRouter(router);
pageRouter(router);

export default router;