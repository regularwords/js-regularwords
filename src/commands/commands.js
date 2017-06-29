import lengths from './full-string-assertions/lengths';
import contains from './full-string-assertions/contains';
import match from './any-location/match';

export let specialCharacters = {
	'number': '\\d',
	'digit': '\\d',
	'uppercase letter': '[A-Z]',
	'lowercase letter': '[a-z]',
	'letter': '[A-Za-z]',
};

let rules = {};
let count = 0;

function registerRule(callback, ...regexes) {
	regexes.forEach(regex => {
		rules[count++] = {
			regex,
			callback,
		};
	});
}

[...lengths, ...contains, ...match]
	.forEach(rule => {
		registerRule(...rule);
	});

export default rules;
