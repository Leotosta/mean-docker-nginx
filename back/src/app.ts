import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './router/Router';

class App {

    public app: express.Application;


    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.db();

    }

    private config(): void {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private routes(): void {
        this.app.use('/', routes)
    }

    private db(): void {
        const connection = 'mongodb://mongo:27017/mean1'

        mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => {
            console.error('Connection error', e.message);
        })

        mongoose.Promise = global.Promise;


    }
}

export default new App().app;
