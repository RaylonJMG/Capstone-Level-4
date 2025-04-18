import axios from "axios";
import React, { useState } from "react";

export function Advice() {
	const [advice, setAdvice] = useState("");
	return (
		<main>
			<div className="text-center">
				<button
					onClick={handleAdvice}
					className="btn btn-sm rounded-3 bg-primary"
					id="mixin-button">
					Get Random Advice Here
				</button>
			</div>
			<br />
			{advice}
		</main>
	);

	async function handleAdvice() {
		debugger;
		const apiResponse = await axios.get("http://localhost:8000/api");
		const result = apiResponse.data;
		const advice = result.slip.advice;
		setAdvice(advice);
	}
}
