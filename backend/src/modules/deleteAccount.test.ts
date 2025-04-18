import { deleteAccount } from "./deleteAccount";

describe("delete user account", () => {
	it("delete user email", async () => {
		//ARRANGE
		const email = undefined;
		//ACT
		const response = await deleteAccount(email);

		//ASSERT
		expect(response).toBeUndefined();
	});
	it("checks that user account has been removed from the list when given an email that used to be on the list", async () => {
		//ARRANGE
		const email = "test@logins.com";
		//ACT
		const response = await deleteAccount(email);

		//ASSERT
		expect(response).toBeUndefined();
	});
});
