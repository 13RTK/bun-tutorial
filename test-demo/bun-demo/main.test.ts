import { expect, test, beforeEach } from "bun:test";

beforeEach(() => {
    console.log("Before Each");
});

test("demo", () => {
    expect(2 + 2).toBe(4);
});

test("PI Test", () => {
    expect(Math.PI.toString()).toContain("3.14");
});
