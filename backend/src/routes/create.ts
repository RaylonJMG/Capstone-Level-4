import { Request, Response } from "express";
import { createAccount } from "../modules/createAccount";

export async function create(request: Request, response: Response) {
	const result = await createAccount();
	response.send(result);
}
