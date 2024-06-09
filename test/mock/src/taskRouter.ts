import { randomUUID } from "crypto";
import { Router } from "express";

const router: Router = Router();
const ROOT_PATH: string = "/tasks";

// タスク一覧APIのレスポンス
// 1つのタスクに相当する
interface TaskResponseEntity {
  id: string;
  title: string;
  description: string;
}

const taskList: TaskResponseEntity[] = Array.from({ length: 2 }).map(
  (_, index) => {
    // 初期値としていくつか入れておく
    return {
      id: randomUUID().toString(),
      title: `タイトル${index}`,
      description: `説明${index}`,
    } as TaskResponseEntity;
  }
);

// タスク一覧取得API
router.get(ROOT_PATH, (req, res) => {
  console.info("GET /tasks");

  console.info(`returns ${JSON.stringify(taskList)}`);
  res.status(200).json(taskList);
});

// タスク登録API
router.post(ROOT_PATH, (req, res) => {
  console.info("POST /tasks");

  const task: TaskResponseEntity = {
    id: randomUUID().toString(),
    title: req.body.title,
    description: req.body.description,
  };
  taskList.push(task);

  console.info(`added ${JSON.stringify(task)}`);
  res.status(201).json(task);
});

// タスク更新API
router.put(ROOT_PATH, (req, res) => {
  console.info("PUT /tasks");

  const task: TaskResponseEntity | undefined = taskList.find(
    (t) => t.id === req.body.id
  );
  if (task) {
    const newTask: TaskResponseEntity = {
      id: task.id,
      title: req.body.title,
      description: req.body.description,
    };
    taskList.splice(taskList.indexOf(task), 1, newTask);
    console.info(`updated ${JSON.stringify(newTask)}`);
    res.status(200).json(newTask);
  } else {
    console.info(`Task not found. taskId: ${req.body.id}`);
    res.sendStatus(404);
  }
});

// タスク削除API
router.delete(ROOT_PATH, (req, res) => {
  console.info("DELETE /tasks");

  const task: TaskResponseEntity | undefined = taskList.find(
    (t) => t.id === req.body.id
  );
  if (task) {
    taskList.splice(taskList.indexOf(task), 1);
    console.info(`deleted ${JSON.stringify(task)}`);
    res.sendStatus(200);
  } else {
    console.info(`Task not found. taskId: ${req.body.id}`);
    res.sendStatus(404);
  }
});

export { router as tasksRouter };
