import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { UserData } from "./UserData";

dotenv.config();

export async function userAuthentication(
	email: string,
	password: string
): Promise<UserData> {
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
			email: email,
			password: password,
		},
	};

	const response = await niceClient.get(request);

	const userData: UserData = response.Item as UserData;
	return userData;
}
