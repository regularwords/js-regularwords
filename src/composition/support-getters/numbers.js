export const supportsNumbers = (state) => {
	const number = {
		get() {
			state.input = '\\d';
			return state.next;
		},
	};

	return {
		number,
		numbers: number,
	};
};
