import { add, substruct, multiply, divide } from "./math.js";

test("Sum adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
});

test("Substruct 5 and 4", () => {
    expect(substruct(5, 4)).toBe(1);
});

test("Multiply 6 and 3", () => {
    expect(multiply(6, 3)).toBe(18);
});

test("Divide by zero", () => {
    expect(divide(2, 0)).toBe("Cannot divide by zero");
});