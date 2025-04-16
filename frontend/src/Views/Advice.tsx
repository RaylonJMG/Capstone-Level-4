import axios from "axios";
import { useState } from "react";

export function Advice() {
	const [advice, setAdvice] = useState("");
	return (
		<main>
			<h1>Advice</h1>
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
		const apiResponse = await axios.get("https://api.adviceslip.com/advice");
		const result = apiResponse.data;
		const advice = result.slip.advice;
		setAdvice(advice);
	}
}
