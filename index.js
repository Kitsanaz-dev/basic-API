import express from "express";
import router  from "./routes/routers.js";
import dotenv from 'dotenv';
import mongoDB from "./mongodb.js";
import e from "express";

dotenv.config(); 

const app = express();
const port = process.env.API_PORT;

mongoDB();

app.use(express.json())
app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});