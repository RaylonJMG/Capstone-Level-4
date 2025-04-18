import axios from "axios";
import { AdviceSlipResponse } from "./AdviceSlipResponse";

export async function getApiResponse(): Promise<any> {
	debugger;
	const apiResponse = await axios.get("https://api.adviceslip.com/advice");
	const result: AdviceSlipResponse = apiResponse.data;
	return result as AdviceSlipResponse;
}
