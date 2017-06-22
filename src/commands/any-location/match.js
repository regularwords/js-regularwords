import {specialCharacters} from '../commands';
import {exactCount} from './../../snippets/ranges';

function match(input, count) {
	count = (isNaN(count)) ? '' : exactCount(count);
	return `${input}${count}`;
}

function matchAnyOfThese(input) {
	return `[${input}]`;
}

function maybe(input) {
	return input + '?';
}

export default [
	[
		() => '^',
		/^start of string/
	],
	[
		() => '$',
		/^end of string/
	],
	[
		match,
		/^match: (.*)$/
	],
	[
		(count, type) => match(specialCharacters[type], count),
		/^match (\d+) ([a-z ]+?)s?$/
	],
	[
		matchAnyOfThese,
		/^match any of these: (.*?)$/
	],
	[
		maybe,
		/^maybe: (.*?)$/
	],
	[
		(count, type) => match(specialCharacters[type], count),
		/^maybe (\d+) ([a-z ]+?)s?$/
	]
];
