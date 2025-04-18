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
		Item: {
			email: "email@logins.com",
			password: "password",
			name: "FirstName",
			address: "123 Sesame Street",
			phone: 5550123,
		},
	};

	const response = await niceClient.put(request);
	return response;
}
