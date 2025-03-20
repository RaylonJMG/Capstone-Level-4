export function output(
	message = "", //expects a string
	outputTag = "outputTag", //provide a value if a outputTag is not specified
	shouldAppend = true
) {
	const outputElement = document.getElementById(outputTag);
	if (shouldAppend) outputElement.innerHTML += message;
	else outputElement.innerHTML += message;
}
//output("Hello", "outputTag2");
//user can specify or you can use the default value of outputTag
