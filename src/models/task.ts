import { UUID } from "crypto";

/**
 * タスク
 */
export default class Task {
  constructor(
    /** タスクID */
    public readonly id: UUID,
    /** タイトル */
    public readonly title: string,
    /** 説明 */
    public readonly description: string
  ) {}

  public static builder(): TaskBuilder {
    return new TaskBuilder();
  }
}

class TaskBuilder {
  private _id?: UUID;
  private _title?: string;
  private _description?: string;

  public id(id: UUID): this {
    this._id = id;
    return this;
  }

  public title(title: string): this {
    this._title = title;
    return this;
  }

  public description(description: string): this {
    this._description = description;
    return this;
  }

  public build(): Task {
    // 1️つでも未設定の項目があればエラー
    if (
      this._id === undefined ||
      this._title === undefined ||
      this._description === undefined
    ) {
      throw new Error("未設定の項目があります");
    }

    return new Task(this._id, this._title, this._description);
  }
}
