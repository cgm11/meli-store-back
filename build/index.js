"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const PORT = 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/items", routes_1.default);
// 404 catch all.
app.use(function (req, res) {
    res.status(404).send("Error: 404 Not Found " + req.path);
});
app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
});
