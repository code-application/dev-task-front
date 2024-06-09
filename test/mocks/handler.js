import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/`, () => {
    return HttpResponse.json({
      message: "Hello, CODE!",
    });
  }),

  // タスク一覧取得API
  http.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tasks`, () => {
    return HttpResponse.json([
      {
        id: "id-1",
        title: "タイトル1",
        description: "説明1",
      },
      {
        id: "id-2",
        title: "タイトル2",
        description: "説明2",
      },
    ]);
  }),
];
