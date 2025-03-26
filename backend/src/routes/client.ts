import { Request, Response } from "express";

export function client(request: Request, response: Response) {
	const data = {
		Name: "Carlton",
		Age: "88",
		DOB: "06/12/1936",
	};
	response.send(data);
}
