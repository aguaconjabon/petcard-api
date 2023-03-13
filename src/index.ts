import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

import petcardRouter from "./v1/routes/petcardRoute";

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get("/", (req: Request, res: Response) => {
  res.send("<h2>It's Working!</h2>");
});

app.use("/api/v1/petcards", petcardRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port http://localhost:${PORT}`);
});
