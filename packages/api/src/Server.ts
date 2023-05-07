import express, { Express,Request, Response } from 'express';

export default class Server {
    constructor(private app: Express, private port: number) { }

    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.get('/health', (req: Request, res: Response)=> {
            res.status(200).send({ok: true})
        })
    }

    run() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}