import { Request, Response } from "express";
import { readAccount } from "../modules/readAccount";
import { UserAccount } from "../modules/UserAccount";

export async function read(request: Request, response: Response) {
	const email = request.query.email as string;
	const account: UserAccount = await readAccount(email);
	response.send(account);
}
