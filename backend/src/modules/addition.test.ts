import { addition } from "./addition";

describe("The addition function...", () => {
	it("add positive numbers, addPositives"),
		it("adds a positive and negative numbers, addPositiveNegative"),
		it("adds negative numbers, addNegatives"),
		it("return NaN when strings are used, addStrings"),
		it("adds number strings, addNumberStrings");
});

function addPositives() {
	//ARRANGE:
	const x = 3;
	const y = 4;

	//ACT:
	const result = addition(x, y);

	//ASSERT:
	expect(result).toBe(7);
}

function addPositiveNegative() {
	//ARRANGE:
	const x = 3;
	const y = -4;

	//ACT:
	const result = addition(x, y);

	//ASSERT:
	expect(result).toBe(-1);
}

function addNegatives() {
	//ARRANGE:
	const x = -3;
	const y = -4;

	//ACT:
	const result = addition(x, y);

	//ASSERT:
	expect(result).toBe(-7);
}

function addStrings() {
	//ARRANGE:
	const x = "Cat";
	const y = "Dog";

	//ACT:
	const result = addition(x, y);

	//ASSERT:
	expect(result).toBe("CatDog");
}

function addNumberStrings() {
	//ARRANGE:
	const x = "3";
	const y = "4";

	//ACT:
	const result = addition(x, y);

	//ASSERT:
	expect(result).toBe("7");
}
