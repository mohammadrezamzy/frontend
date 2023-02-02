function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function camelCase(text) {
	const [first, ...others] = text
		.trim()
		.split(" ")
		.filter((str) => str !== "")
		.map(capitalize);
	return first.toLowerCase() + others.join("");
}

export default camelCase;
