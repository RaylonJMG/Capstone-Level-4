import { Request, Response } from "express";
import { userAuthentication, UserData } from "../modules/userAuthentication";

export async function auth(request: Request, response: Response) {
	const userData: UserData = await userAuthentication();
	response.send(userData);
}
