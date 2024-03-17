import cors from "cors";
import express from "express";
import { helloWorldRouter } from "./helloWorldRouter";

const app = express();
app.use(express.json());
app.use(cors());

// サンプルのエンドポイントを定義
app.use(helloWorldRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
