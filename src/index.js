import dotenv from "dotenv"
dotenv.config()
import express from "express"

const app = express();

import connectDB from "./db/index.js";
const port = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.listen(port || 8000, () => {
            console.log(`Server is running at port: ${port}`);

        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed!", err);

    })