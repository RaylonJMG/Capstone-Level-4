export function addition(x: number | string, y: number | string) {
	const result = Number(x) + Number(y);
	return result;
}

// const result = addition([16, 27, "cat", 32, "dog", 45, 52, 60]);
// function addition(numbers: Array<number | string| boolean>) {
// }
// function getGreeting(greetings: Array<string>) {
//     return greetings[0];
// }
// const result2 = getGreeting(["hi", "hello", "what's up"]);

// //use pipe | or double pipe || to mean "or" between data types
// if (result === "123" || result2 === "hi") console.log("those are my favorite greetings.");
