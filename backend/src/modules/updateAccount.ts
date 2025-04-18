import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, UpdateCommandInput } from "@aws-sdk/lib-dynamodb";
import dotenv from "dotenv";
import { UserAccount } from "./UserAccount";

dotenv.config();

export async function updateAccount(
	userEmail: string
): Promise<UserAccount | undefined> {
	// userPhone: number,
	// userAddress: string,
	// userName: string,
	// userPassword: string
	// if (userEmail !== "string") return undefined;
	// if (userEmail === undefined) return undefined;
	//if (userEmail === userEmaiil) return undefined;
	// if (userPassword !== "string") return undefined;
	// if (userPassword === undefined) return undefined;

	const apiKey = {
		region: process.env.region,
		credentials: {
			accessKeyId: process.env.accessKeyId,
			secretAccessKey: process.env.secretAccessKey,
		},
	};
	const client = new DynamoDB(apiKey);
	const niceClient = DynamoDBDocument.from(client);

	const request: UpdateCommandInput = {
		TableName: "logins",
		Key: {
			email: "userEmail",
		},
		AttributeUpdates: {
			password: { Value: "userPassword" },
			name: { Value: "userName" },
			phone: { Value: "userPhone" },
			address: { Value: "userAddress" },
		},
	};

	const response = await niceClient.update(request);
	return response.Attributes as UserAccount;
}
