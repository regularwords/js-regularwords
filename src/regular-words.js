import './polyfills/String.startsWith';
import regexBuilder from './regexBuilder';

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
