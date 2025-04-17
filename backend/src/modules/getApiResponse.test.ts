import { getApiResponse } from "./getApiResponse";

describe(getApiResponse, () => {
	it("returns a response from the Advice API", async () => {
		//ARRANGE
		const apiResponse = {
			slip: {
				slip_id: "000",
				advice: "This is an example advice response.",
			},
		};
		//ACT
		const result = await getApiResponse();

		//ASSERT
		expect(result).toBeDefined();
		expect(result).toHaveProperty("slip");
		expect(result).toHaveProperty("id");
	});
});
