export default function TaskList() {
  // FIXME: APIから値を取得するように直す
  const id = "dummy-uuid";
  const taskTitle = "タイトル1";
  const taskDescription = "説明1";
  const createdAt = "2021-01-01T00:00:00.000Z";
  const updatedAt = "2021-01-01T00:00:00.000Z";

  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div
            className="card w-96 bg-base-100 shadow-xl"
            key={"task-" + index}
          >
            <div className="card-body">
              <p>{id}</p>
              <h2 className="card-title">{taskTitle}</h2>
              <p>{taskDescription}</p>
              <p>{createdAt}</p>
              <p>{updatedAt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
