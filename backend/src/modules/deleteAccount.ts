import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { UserAccount } from "./UserAccount";

dotenv.config();

export async function deleteAccount(userEmail: string) {
	if (userEmail === "") return undefined;
	if (userEmail === undefined) return undefined;
	if (userEmail === "undefined") return undefined;

	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};
	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request = {
		TableName: "logins",
		Key: {
			email: userEmail,
		},
	};

	const response = await niceClient.delete(request);
	return response;
}
