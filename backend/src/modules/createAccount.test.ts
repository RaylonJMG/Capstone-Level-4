import { createAccount } from "./createAccount";

describe("createAccount", () => {
	it("checks if a new account has been created", async () => {
		//ARRANGE
		const Account = {
			name: "Raylon",
			address: "123 Sesame Street",
			email: "raylon@logins.com",
			phone: 5551234,
		};
		//ACT
		const result = await createAccount();
		//ASSERT
		expect(result).toHaveProperty("name");
		expect(result).toHaveProperty("address");
		expect(result).toHaveProperty("email");
		expect(result).toHaveProperty("phone");
	});
	it("checks if the email is in the list", async () => {
		//ARRANGE
		const Account = {
			name: "Carlton",
			address: "123 Sesame Street",
			email: "huey@logins.com",
			phone: 5550612,
		};
		//ACT
		const result = await createAccount();

		//ASSERT
		expect(result).toHaveProperty("email");
		expect(result).toBe(true);
	});
	// it("", async () => {
	// 	//ARRANGE
	// 	const Account = {
	// 		name: "Raylon",
	// 		address: "123 Sesame Street",
	// 		email: "raylon@logins.com",
	// 		phone: 5551234,
	// 	};
	// 	//ACT
	// 	const result = await createAccount();
	// 	//ASSERT
	//     expect(result).toBe("raylon@logins.com")
	// });
});
