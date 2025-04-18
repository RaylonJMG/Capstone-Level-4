import { updateAccount } from "./updateAccount";

describe("updates user accounts", () => {
	it("checks if the user account has an existing name, password, address, or phone number when given an existing email", async () => {
		//ARRANGE
		const email: any = "test@logins.com";
		const name = "Tester";
		const password = "new_Password1!!";
		const address = "123 Test St, Test City, TX 12345";
		const phone = 5554567;

		//ACT
		const result = await updateAccount(email);

		//ASSERT
		expect(result).toHaveProperty("email");
		expect(result).toHaveProperty("password");
		expect(result).toHaveProperty("name");
		expect(result).toHaveProperty("phone");
		expect(result).toHaveProperty("address");
	});
	it("does not update the user account when given an email that is not in the list", async () => {
		//ARRANGE
		const email = "emailNotListed@logins.com";

		//ACT
		const result = await updateAccount(email);

		//ASSERT
		expect(result).toBeUndefined();
	});
	it("does not update the user account if the email is a number", async () => {
		//ARRANGE
		const email: any = 5550112;

		//ACT
		const result = await updateAccount(email);

		//ASSERT
		expect(result).toBeUndefined();
	});
	it("does not update the user account if the email is not provided", async () => {
		//ARRANGE
		const email: any = "";

		//ACT
		const result = await updateAccount(email);

		//ASSERT
		expect(result).toBeUndefined();
	});
	it("does not update the email if the email is already in the list", async () => {
		//ARRANGE
		const email = "test@logins.com";

		//ACT
		const result = await updateAccount(email);

		//ASSERT
		expect(result).toBeUndefined();
	});
});
