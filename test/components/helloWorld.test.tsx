import HelloWorld from "@/components/helloWorld";
import { render, screen } from "@testing-library/react";

// Delete this test when production code testing is added.
describe("Sample Page testing", () => {
  it("Sample UI Component test for jest setup", async () => {
    // When
    render(<HelloWorld />);
    // Then
    const message = await screen.findByText(/Hello, CODE!/i);
    expect(message).toBeInTheDocument();
  });
});
