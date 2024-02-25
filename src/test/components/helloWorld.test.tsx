import HelloWorld from "@/components/helloWorld";
import { render, screen } from "@testing-library/react";

// Delete this test when production code testing is added.
describe("Sample Page testing", () => {
  it("Sample UI Component test for jest setup", () => {
    // TODO: implement UI component test for sample page(@/components/helloWorld.tsx)
    const mockResponse = () =>
      new Promise((resolve) => {
        resolve({
          ok: true,
          status: 200,
          text: async () => {
            data: "Hello World";
          },
        });
      });

    global.fetch = jest.fn().mockImplementation(mockResponse);

    // TODO: 以下のコードでテストが失敗する
    render(<HelloWorld />);
    const message = screen.getByText("Hello World");

    expect(message).toBeInTheDocument();
  });
});
