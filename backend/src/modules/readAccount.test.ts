import { readAccount } from "./readAccount";

describe("readAccount", () => {
	it("returns an email, password, name, and phone when given an existing email", async () => {
		//ARRANGE
		const email = "test@logins.com";

		//ACT
		const result = await readAccount(email);

		//ASSERT
		expect(result).toHaveProperty("email");
		expect(result).toHaveProperty("password");
		expect(result).toHaveProperty("name");
		expect(result).toHaveProperty("phone");
	});
	it("returns a result with the matching email", async () => {
		//ARRANGE
		const email = "test@logins.com";

		//ACT
		const result = await readAccount(email);

		//ASSERT
		expect(result.email).toBe(email);
	});
	it("doesn't return a result when the email is not in the list", async () => {
		//ARRANGE
		const email = "emailNotListed@logins.com";

		//ACT
		const result = await readAccount(email);

		//ASSERT
		expect(result).toBeUndefined();
	});
	it("doesn't return a result when the email is an object", async () => {
		//ARRANGE
		const email: any = {};

		//ACT
		const result = await readAccount(email);

		//ASSERT
		expect(result).toBeUndefined();
	});
});
