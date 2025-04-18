import { Request, Response } from "express";
import { UserAccount } from "../modules/UserAccount";
import { deleteAccount } from "../modules/deleteAccount";

export async function deletion(request: Request, response: Response) {
	const email = request.query.email as string;
	const result = await deleteAccount(email);
	response.send(result);
}
