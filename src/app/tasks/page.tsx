import Task from "@/models/task";
import { UUID } from "crypto";

/**
 * タスク一覧APIのレスポンス。
 * 1つのタスクに相当する。
 */
interface TaskResponseEntity {
  id: string;
  title: string;
  description: string;
}

const fetchTaskList = async (): Promise<Task[]> => {
  const response: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`,
    // このオプションを付けないとサーバー側のデータ更新が反映されない
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("タスクの一覧取得に失敗しました");
  }

  return response.json().then((json) => {
    return json.map((task: TaskResponseEntity) => {
      return Task.builder()
        .id(task.id as UUID)
        .title(task.title)
        .description(task.description)
        .build();
    });
  });
};

export default async function TaskList() {
  const taskList: Task[] = await fetchTaskList();

  return (
    <div>
      {taskList.map((task, index) => {
        return (
          <div
            className="card w-96 bg-base-100 shadow-xl"
            key={"task-" + index}
          >
            <div className="card-body">
              <p>id: {task.id}</p>
              <h2 className="card-title">{task.title}</h2>
              <p>{task.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
