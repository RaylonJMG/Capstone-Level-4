import axios from "axios";

export async function getApiResponse() {
	const apiResponse = await axios.get("https://api.adviceslip.com/advice");
	const result = apiResponse.data;
	const advice = result.slip.advice;
	return advice;
}
