import { test, beforeEach } from "node:test";
import assert from "node:assert";

beforeEach(() => {
    console.log("Before Each");
});

test("demo", () => {
    assert.equal(2 + 2, 4);
});
test("demo1", () => {
    assert.equal(2 + 3, 5);
});
