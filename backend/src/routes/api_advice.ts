import { Request, Response } from "express";
import { getApiResponse } from "../modules/getApiResponse";

export function api_advice(request: Request, response: Response) {
	const apiResponse = getApiResponse();
	response.send(apiResponse);
}
