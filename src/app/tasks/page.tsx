const fetchTaskList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`,
    // このオプションを付けないとサーバー側のデータ更新が反映されない
    { cache: "no-cache" }
  );
  if (!response.ok) {
    throw new Error("タスクの一覧取得に失敗しました");
  }

  return response.json();
};

export default async function TaskList() {
  const taskList = await fetchTaskList();

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
              <p>作成日: {task.createdAt}</p>
              <p>更新日: {task.updatedAt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
