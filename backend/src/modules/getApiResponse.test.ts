import { request, response } from "express";
import { getApiResponse } from "./getApiResponse";

describe(getApiResponse, () => {
	it("returns a response from the Advice API", async () => {
		//ARRANGE
		const apiResponse = {
			slip: {
				id: "",
				advice: "This is an example advice response.",
			},
		};
		//ACT
		const result = await getApiResponse(request, response);

		//ASSERT
		expect(result).toBeDefined();
		expect(result).toHaveProperty("slip");
		expect(result).toHaveProperty("id");
	});
	it("does not return a response from the Advice API when there is no request sent to the API server", async () => {
		//ARRANGE
		const apiResponse = {
			slip: {
				id: "",
				advice: "This is an example advice response.",
			},
		};
		//ACT
		const result = await getApiResponse(undefined, undefined);

		//ASSERT
		expect(result).toBeUndefined();
	});
});
