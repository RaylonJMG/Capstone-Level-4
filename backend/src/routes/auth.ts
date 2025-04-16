import { Request, Response } from "express";
import { userAuthentication, userData } from "../modules/userAuthentication";

export async function auth(request: Request, response: Response) {
	const userData: userData = await userAuthentication();
	response.send(userData);
}
