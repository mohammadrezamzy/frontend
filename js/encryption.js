function encrypt(str, n) {
	const encrypted = [];
	const char = (c) => String.fromCharCode(c);
	const ascii = (c) => String(c).charCodeAt(0);
	const isUpper = (c) => String(c).toUpperCase() === c;

	for (let i = 0; i < str.length; i++) {
		const c = str[i];
		const e = ascii(c) + (n % 26);
		if (isUpper(c)) {
			if (e > "Z".charCodeAt(0)) encrypted.push(e - 26);
			else encrypted.push(e);
		} else {
			if (e > "z".charCodeAt(0)) encrypted.push(e - 26);
			else encrypted.push(e);
		}
	}

	return encrypted.map(char).join("");
}

function decrypt(str, n) {
	return encrypt(str, 26 - (n % 26));
}

export { encrypt, decrypt };