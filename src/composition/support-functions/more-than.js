import {supportsFrom} from './from';
import {supportsOf} from './of';
import {supportsNumbers} from '../support-getters/numbers';
import {supportsLetters, supportsLowercaseLetters, supportsUppercaseLetters} from '../support-getters/letters';

export const supportsMoreThan = (state) => ({
	moreThan(count) {
		state.count = count;

		const supports = {};

		Object.assign(
			supports,
			supportsFrom(state),
			supportsOf(state)
		);

		Object.defineProperties(supports, supportsNumbers(state));
		Object.defineProperties(supports, supportsUppercaseLetters(state));
		Object.defineProperties(supports, supportsLowercaseLetters(state));
		Object.defineProperties(supports, supportsLetters(state));

		return supports;
	},
});
