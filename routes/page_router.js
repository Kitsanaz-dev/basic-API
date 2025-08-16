import path from "path";
import { fileURLToPath } from "url";
import pageController from "../controller/page_controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageRouter = (router) => {
    router.get("/", pageController.helloWorld);
    router.get("/index", pageController.index);
    router.get("/login", pageController.login);
    router.get("/info", pageController.info);
}

export default pageRouter;