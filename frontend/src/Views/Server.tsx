import React, { useEffect, useState } from "react";
import axios from "axios";

export function Server() {
	const [serverReponse, setServerResponse] = useState("");
	useEffect(componentDidMount, []);
	return (
		<main>
			<h1>Server</h1>
			{serverReponse}
		</main>
	);

	function componentDidMount() {
		getServerResponse();
	}
	async function getServerResponse() {
		const response = await axios.get("http://localhost:8000");
		const stringified = JSON.stringify(response.data);
		setServerResponse(stringified);
	}
}
