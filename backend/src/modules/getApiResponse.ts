import axios from "axios";

export async function getApiResponse(): Promise<any> {
	debugger;
	const apiResponse = await axios.get("https://api.adviceslip.com/advice");
	console.log(apiResponse);
	const result: AdviceSlipResponse = apiResponse.data;
	console.log(result);
	return result;
}

export type AdviceSlipResponse = {
	slip: {
		id: string;
		advice: string;
	};
};
