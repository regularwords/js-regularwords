export const supportsOf = (state) => ({
	of(input) {
		state.input = input;
		return state.next;
	},
});
