import { Request, Response } from "express";

export function root(request: Request, response: Response) {
	const { url } = request;
	response.send(
		`<h1>Good Food Hut!</h1><p>Welcome to the backend. The path is ${url}!</p>`
	);
}
