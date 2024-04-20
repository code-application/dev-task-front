import sum from "@/libs/sample";

// Delete this test when production code testing is added.
describe("Sample Test; test of sum", () => {
  it("returns sum of two positive values", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
