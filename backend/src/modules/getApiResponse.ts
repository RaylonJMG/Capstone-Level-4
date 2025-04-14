import axios from "axios";
import { Request, Response } from "express";

export async function getApiResponse(request: Request, response: Response) {
	const apiResponse = await axios.get("https://api.adviceslip.com/advice");
	const result = apiResponse.data;
	const advice = result.slip.advice;
	response.send(advice);
}
