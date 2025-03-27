import { authenticationAWS } from "./authenticationAWS";

describe("The authenticationAWS function", () => {
	it.skip("authenticates when email and password are correct", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "abc";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(true);
	});
	it.skip("does not authenticate when email is incorrect and password are incorrect", async () => {
		//ARRANGE
		const email = "bbb@logins.com";
		const password = "abc";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it.skip("does not authenticate when email is correct, but the password is incorrect", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "wrong password";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it.skip("does not authenticate when email is incorrect, but the password is correct", async () => {
		//ARRANGE
		const email = "wrongEmail@wrong.com";
		const password = "abc";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it.skip("does not authenticate when email is empty, but the password is correct", async () => {
		//ARRANGE
		const email = "";
		const password = "abc";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it.skip("does not authenticate when email is correct, but the password is empty", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is not in the list", async () => {
		//ARRANGE
		const email = "notInList@logins.com";
		const password = "wrong Password";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it.skip("does not authenticate when email is not in the list, but the password is in the list", async () => {
		//ARRANGE
		const email = "notInList@logins.com";
		const password = "abc";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it.skip("does not authenticate when email is in the list, but the password is empty", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it.skip("does not authenticate when email is in the list, but the password is a Number", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = 12345678;
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
});

//need to run the tests npx jest to make sure they work properly
