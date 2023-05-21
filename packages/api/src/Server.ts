import express, { Express,Request, Response } from 'express';
import userRouter from './routes/user';
import petRouter from './routes/pet';
import cors from 'cors';

export default class Server {
    constructor(private app: Express, private port: number) { }

    config() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.get('/api/health', (req: Request, res: Response)=> {
            res.status(200).send({ok: true})
        })
        this.app.use('/api/user', userRouter);
        this.app.use('/api/pet', petRouter);
    }

    run() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}