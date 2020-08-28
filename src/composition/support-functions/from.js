export const supportsFrom = (state) => ({
	from(input) {
		state.input = input;
		return state.next;
	},
});
