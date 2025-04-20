import { Request, Response } from "express";

export function home(request: Request, response: Response) {
	const { url } = request;
	response.send(
		`<h1>Capstone Level 4: Home</h1><p>The path to the home page is ${url}</p>`
	);
}
