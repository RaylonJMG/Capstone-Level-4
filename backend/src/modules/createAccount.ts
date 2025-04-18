import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export async function createAccount() {
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
		Item: { email: "newEmail@logins.com", password: "newPassword" },
	};

	const response = await niceClient.put(request);
	return response;
}
