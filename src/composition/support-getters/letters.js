export const supportsUppercaseLetters = (state) => {
	const uppercaseLetter = {
		get() {
			state.input = '[A-Z]';
			return state.next;
		},
	};

	return {
		uppercaseLetter,
		uppercaseLetters: uppercaseLetter,
	};
};

export const supportsLowercaseLetters = (state) => {
	const lowercaseLetter = {
		get() {
			state.input = '[a-z]';
			return state.next;
		},
	};

	return {
		lowercaseLetter,
		lowercaseLetters: lowercaseLetter,
	};
};

export const supportsLetters = (state) => {
	const letter = {
		get() {
			state.input = '[a-zA-Z]';
			return state.next;
		},
	};

	return {
		letter,
		letters: letter,
	};
};
