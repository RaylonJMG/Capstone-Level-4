import { Request, Response } from "express";

export async function create(request: Request, response: Response) {
	const result = await createAccount();
	response.send(result);
}
