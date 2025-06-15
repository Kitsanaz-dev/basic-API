import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Create the __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let user = [
    { name: "touy", age: 18 },
    { name: "john", age: 25 },
    { name: "jane", age: 30 }
];

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, 'index.html')
    );
});

app.get("/login", (req, res) => {
    res.sendFile(
        path.join(__dirname, 'login.html')
    );
});

app.get("/info", (req, res) => {
    res.sendFile(
        path.join(__dirname, 'infographic.html')
    )
});

app.get("/users", (req, res) => {
    res.json(user);
});

app.get("/user/:name", (req, res) => {
    const userParam = req.params.name;

    console.log(` GET Req for /user/${userParam}`);

    const userData = user.find((user) => user.name.toLowerCase() === userParam);

    if (userData) {
        res.json(userData);
    } else {
        res.status(404).json({ message: `User '${req.params.name}' not found.` });
    }
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});