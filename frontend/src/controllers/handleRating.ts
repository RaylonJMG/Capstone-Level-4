import { output } from "../utils/output";

export function handleRating() {
	setTimeout(serverResponse, 2000);
	output("Submitting Rating now...");

	function serverResponse() {
		output("Thanks! We have received your message!");
	}
}
