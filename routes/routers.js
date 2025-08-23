import { Router } from "express";
import userRouter from "./user_router.js";
import pageRouter from "./page_router.js";
import menuRouter from "./menu_router.js";

const router = Router();

userRouter(router);
pageRouter(router);
menuRouter(router);

export default router;