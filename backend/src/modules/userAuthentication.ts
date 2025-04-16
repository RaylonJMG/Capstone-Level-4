import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";

dotenv.config();

export async function userAuthentication(): Promise<userData> {
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
			email: "test@logins.com",
		},
	};

	const response = await niceClient.get(request);

	const userData: userData = response.Item as userData;
	return userData;
}

type userData = {
	email: string;
	password: string;
	name: string;
	phone: number;
};
