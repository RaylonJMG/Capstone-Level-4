import { Request, Response } from "express";
import { getApiResponse } from "../modules/getApiResponse";

export function api(request: Request, response: Response) {
	const apiResponse = getApiResponse();
	response.send(apiResponse);
}
