import { randomUUID, UUID } from "crypto";
import { Router } from "express";

const router: Router = Router();
const ROOT_PATH: string = "/tasks";

class Task {
  constructor(
    public id: UUID = randomUUID(),
    public title: string = "",
    public description: string = "",
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

const taskList: Task[] = Array.from({ length: 2 }).map((_, index) => {
  // 初期値としていくつか入れておく
  const task: Task = new Task();
  task.title = `タイトル${index}`;
  task.description = `説明${index}`;
  return task;
});

// タスク一覧取得API
router.get(ROOT_PATH, (req, res) => {
  console.info("GET /tasks");

  console.info(`returns ${JSON.stringify(taskList)}`);
  res.json(taskList);
});

// タスク登録API
router.post(ROOT_PATH, (req, res) => {
  console.info("POST /tasks");

  const task: Task = new Task();
  task.id = req.body.id;
  task.title = req.body.title;
  task.description = req.body.description;
  task.createdAt = new Date();
  task.updatedAt = new Date();
  taskList.push(task);

  console.info(`added ${JSON.stringify(task)}`);
  res.sendStatus(200);
});

// タスク更新API
router.put(ROOT_PATH, (req, res) => {
  console.info("PUT /tasks");

  const task: Task | undefined = taskList.find((t) => t.id === req.body.id);
  if (task) {
    task.title = req.body.title;
    task.description = req.body.description;
    task.updatedAt = new Date();
    console.info(`updated ${JSON.stringify(task)}`);
    res.sendStatus(200);
  } else {
    console.info(`Task not found. taskId: ${req.body.id}`);
    res.sendStatus(404);
  }
});

// タスク削除API
router.delete(ROOT_PATH, (req, res) => {
  console.info("DELETE /tasks");

  const task: Task | undefined = taskList.find((t) => t.id === req.body.id);
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
