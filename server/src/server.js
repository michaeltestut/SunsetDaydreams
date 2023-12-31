"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ['http://localhost:5173']
}));
app.get('/', (req, res) => {
    res.send('Hello World From the Typescript Server!');
});
app.get('/api/products', (req, res) => {
    res.json(data_1.sampleProducts);
});
app.get(`/api/products/:url_slug`, (req, res) => {
    res.json(data_1.sampleProducts.find((x) => x.url_slug === req.params.url_slug));
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
