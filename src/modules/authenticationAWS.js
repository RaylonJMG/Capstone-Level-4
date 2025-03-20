import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { accessKeyId, region, secretAccessKey } from "../../.aws/credentials";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export async function authenticationAWS(email = "", password = "") {
	const apiKey = {
		region: region,
		credentials: {
			accessKeyId: accessKeyId,
			secretAccessKey: secretAccessKey,
		},
	};

	//DYNAMODB CLIENTS (CLASS)
	const client = new DynamoDB(apiKey); //ORIGiNAL CLIENT
	const niceClient = DynamoDBDocument.from(client); //UPDATED & NICER TO WORK WITH

	//DATA TO BE REQUESTED FROM DYNAMODB
	const request = {
		TableName: "logins",
		Key: { email: email },
	};

	//GETS REQUESTED DATA FROM DYNAMODB
	const response = await niceClient.get(request);
	debugger;
	//AUTHENTICATE
	const loginMatch = response.Item; //extracts login from the response
	//const isAuthenticated = email === loginMatch.email; //checks if email from user matches email from the response
	if (!loginMatch) {
		
		return false
	} else {
		const isAuthenticated = password === loginMatch.password; //checks if password from user matches password from the response
	return isAuthenticated; //returns authentication response true or false
	}
	
}
