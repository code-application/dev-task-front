import TaskList from "@/app/tasks/page";
import { render, screen } from "@testing-library/react";

describe("TaskList component", () => {
  it("初期表示時に取得したデータを正しくレンダリングできる", async () => {
    // Arrange
    // Nothing to do

    // Act
    render(<TaskList />);

    // Assert
    expect(await screen.findByText("id: id-1")).toBeInTheDocument();
    expect(await screen.findByText("タイトル1")).toBeInTheDocument();
    expect(await screen.findByText("説明1")).toBeInTheDocument();
    expect(await screen.findByText("id: id-2")).toBeInTheDocument();
    expect(await screen.findByText("タイトル2")).toBeInTheDocument();
    expect(await screen.findByText("説明2")).toBeInTheDocument();
  });
});
