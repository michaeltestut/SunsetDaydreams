
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import { sampleProducts } from "./data";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors({
    credentials:true,
    origin: ['http://localhost:5173']
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World From the Typescript Server!')
});
app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
