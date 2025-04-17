import axios from "axios";

export async function getApiResponse(): Promise<any> {
	debugger;
	const apiResponse = await axios.get("https://api.adviceslip.com/advice");
	const result: AdviceSlipResponse = apiResponse.data;
	return result;
}

export type AdviceSlipResponse = {
	slip: {
		slip_id: string;
		advice: string;
	};
};
