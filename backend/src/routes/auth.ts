import { Request, Response } from "express";
import { userAuthentication } from "../modules/userAuthentication";
import { UserData } from "../modules/UserData";

export async function auth(request: Request, response: Response) {
	const email = request.query.email as string;
	const password = request.query.password as string;
	const userData: UserData = await userAuthentication(email, password);
	response.send(userData);
}
