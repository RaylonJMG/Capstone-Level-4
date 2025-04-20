import { Request, Response } from "express";

export function root(request: Request, response: Response) {
	const { url } = request;
	response.send(
		`<h1>Capstone Level 4</h1><p>Welcome to the backend. The path is ${url}!</p>`
	);
}
