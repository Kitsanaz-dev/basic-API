
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageController = {
    helloWorld: (req, res) => {
        res.send('Hello World!');
    },
    index: (req, res) => {
        res.sendFile(
            path.join(__dirname, '../page/index.html')
        );
    },
    login: (req, res) => {
        res.sendFile(
            path.join(__dirname, '../page/login.html')
        );
    },
    info: (req, res) => {
        res.sendFile(
            path.join(__dirname, '../page/infographic.html')
        );
    },
}

export default pageController;