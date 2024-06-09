import cors from "cors";
import express from "express";
import { helloWorldRouter } from "./helloWorldRouter";
import { tasksRouter } from "./taskRouter";

const app = express();
app.use(express.json());
app.use(cors());

// サンプルのエンドポイントを定義
app.use(helloWorldRouter);

app.use(tasksRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
