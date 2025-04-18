import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { UserAccount } from "./UserAccount";

dotenv.config();

export async function readAccount() {
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

	const account: UserAccount = response.Item as UserAccount;
	return account;
}
