import { userAuthentication } from "./userAuthentication";

describe("userAuthentication", () => {
	it("checks if the email and password is in the list", async () => {
		//ARRANGE
		const email = "test@logins.com";
		const password = "testing";
		//ACT
		const result = await userAuthentication();
		//ASSERT
		expect(result).toHaveProperty(email);
		expect(result).toHaveProperty(password);
	});
	it("does not return a result if the email and password is not in the list", async () => {
		//ARRANGE
		const email = "emailNotListed@logins.com";
		const password = "notListed";
		//ACT
		const result = await userAuthentication();
		//ASSERT
		expect(result).toBeUndefined();
	});
});
