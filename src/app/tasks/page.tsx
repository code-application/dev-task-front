"use client";

import Task from "@/models/task";
import { UUID } from "crypto";
import { useEffect, useState } from "react";

/**
 * タスク一覧APIのレスポンス。
 * 1つのタスクに相当する。
 */
interface TaskResponseEntity {
  id: string;
  title: string;
  description: string;
}

/**
 * タスク一覧を取得する。
 *
 * @returns タスク一覧
 */
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

export default function TaskList() {
  // このコンポーネントで状態管理する変数
  const [taskList, setTaskList] = useState<Task[]>([]);

  // 画面の初期表示で行う処理
  const initialize = async () => {
    await fetchTaskList().then((tasks) => setTaskList(tasks));
  };

  useEffect(() => {
    initialize();
  }, [taskList]);

  return (
    <div>
      {taskList.map((task) => {
        return (
          <div
            className="card w-96 bg-base-100 shadow-xl"
            key={"task-" + task.id}
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
