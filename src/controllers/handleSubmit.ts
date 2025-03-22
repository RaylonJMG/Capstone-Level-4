import React from "react";

export function handleSubmit(event: Event) {
	event.preventDefault();
	const inputs = event.target;
	const emailInput = inputs[1];
	const email = emailInput.value;
	const message = `Thank you for your message, ${email}!`;
	return message;
}
