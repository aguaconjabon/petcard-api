"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const petcardRoute_1 = __importDefault(require("./v1/routes/petcardRoute"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("<h2>It's Working!</h2>");
});
app.use("/api/v1/petcards", petcardRoute_1.default);
app.listen(PORT, () => {
    console.log(`API is listening on port http://localhost:${PORT}`);
});
