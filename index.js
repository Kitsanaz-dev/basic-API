import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
import mongoDB from "./mongodb.js";
import User from "./model/User.js";

dotenv.config();

const app = express();
const port = process.env.API_PORT;

mongoDB();

// Create the __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, 'page/index.html')
    );
});

app.get("/login", (req, res) => {
    res.sendFile(
        path.join(__dirname, 'page/login.html')
    );
});

app.get("/info", (req, res) => {
    res.sendFile(
        path.join(__dirname, 'page/infographic.html')
    )
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching users", err);
        res.status(404).json({ message: "Error fetching users" });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});