import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './routes';
import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";

import swaggerDocs from "./swagger.json";

class App {

    public express: express.Application

    public constructor() {
        this.express = express();

        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    }

    private database(): void {

        dotenv.config()

        let username = process.env.DATABASE_USER;
        let password = process.env.DATABASE_PASSWORD;

        mongoose.connect(
            `mongodb+srv://${username}:${password}@sandbox.xhgsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
            )
    }

    private routes(): void {
        this.express.use(router)
    }
}

export default new App().express