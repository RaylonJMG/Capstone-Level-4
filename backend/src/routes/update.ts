import { Request, Response } from "express";
import { updateAccount } from "../modules/updateAccount";
import { UserAccount } from "../modules/UserAccount";

export async function update(request: Request, response: Response) {
	const email = request.query.email as string;
	const account: UserAccount = await updateAccount(email);
	response.send(account);
}
