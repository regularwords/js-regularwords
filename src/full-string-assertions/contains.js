import {specialCharacters} from '../rules';

function mustHave(input) {
	return `(?=.*${input})`;
}

function mustNotHave(input) {
	return `(?!.*${input})`;
}

function mustHaveMoreThan(count, input) {
	return `(?=(?:.*${input}){${parseInt(count) + 1}})`;
}

function mustHaveLessThan(count, input) {
	return `(?!(?:.*${input}){${count}})`;
}

function mustHaveExactly(count, input) {
	return `(?=^(?:[^${input}]*${input}){${count}}[^${input}]*$)`;
}

function mustNotHaveExactly(count, input) {
	return `(?!(?=^(?:[^${input}]*${input}){${count}}[^${input}]*$))`;
}

function mustHaveBetween(min, max, input) {
	return `(?=(?:.*${input}){${min}})(?!(?:.*${input}){${parseInt(max) + 1}})`;
}

function mustNotHaveBetween(min, max, input) {
	return `(?!(?=(?:.*${input}){${min}})(?!(?:.*${input}){${parseInt(max) + 1}}))`;
}

export default [
	[
		mustHave,
		/^must have: (.*)$/,
	],
	[
		(type) => mustHave(specialCharacters[type]),
		/^must have an? ([a-z ]+?)s?$/
	],
	[
		mustNotHave,
		/^must not have: (.*)$/
	],
	[
		(type) => mustNotHave(specialCharacters[type]),
		/^must not have an? ([a-z ]+)$/
	],
	[
		mustHaveMoreThan,
		/^must (?:have|contain|include) more than (\d+): (.*)$/
	],
	[
		(count, type) => mustHaveMoreThan(count, specialCharacters[type]),
		/^must (?:have|contain|include) more than (\d+) ([a-z ]+?)s?$/
	],
	[
		mustHaveLessThan,
		/^must (?:have|contain|include) less than (\d+): (.*)$/
	],
	[
		(count, type) => mustHaveLessThan(count, specialCharacters[type]),
		/^must (?:have|contain|include) less than (\d+) ([a-z ]+?)s?$/
	],
	[
		mustHaveExactly,
		/^must (?:have|contain|include) (?:exactly|only) (\d+): (.*)$/
	],
	[
		// @FixMe this does not support passing in types that are ranges i.e: [a-z]
		(count, type) => mustHaveExactly(count, specialCharacters[type]),
		/^must (?:have|contain|include) (?:exactly|only) (\d+) ([a-z ]+?)s?$/
	],
	[
		mustNotHaveExactly,
		/^must not (?:have|contain|include) (?:exactly|only) (\d+): (.*)$/
	],
	[
		// @FixMe this does not support passing in types that are ranges i.e: [a-z]
		(count, type) => mustNotHaveExactly(count, specialCharacters[type]),
		/^must not (?:have|contain|include) (?:exactly|only) (\d+) ([a-z ]+?)s?$/
	],
	[
		mustHaveBetween,
		/^must (?:have|contain|include) between (\d+) and (\d+): (.*)$/
	],
	[
		(min, max, type) => mustHaveBetween(min, max, specialCharacters[type]),
		/^must (?:have|contain|include) between (\d+) and (\d+) ([a-z ]+?)s?$/
	],
	[
		mustNotHaveBetween,
		/^must not (?:have|contain|include) between (\d+) and (\d+): (.*)$/
	],
	[
		(min, max, type) => mustNotHaveBetween(min, max, specialCharacters[type]),
		/^must not (?:have|contain|include) between (\d+) and (\d+) ([a-z ]+?)s?$/
	]
];
