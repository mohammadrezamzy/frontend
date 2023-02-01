function secure(word) {
	const regex = /09[0-9]{9}/;
	if (regex.test(word)) {
		return word.slice(0, 4) + "***" + word.slice(7);
	}
	return word;
}

export function securePhoneNumbers(text) {
	// TODO:

	return String(text).split(" ").map(secure).join(" ");
}
