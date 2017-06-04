import './polyfills/String.startsWith';
import regexBuilder from './builder';

class RegularWords {
	constructor(words) {
		this.words = words;
		this.regex = regexBuilder(words);
	}

	test(string) {
		return this.regex.test(string);
	}
}

module.exports = RegularWords;
