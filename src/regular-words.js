import './polyfills/String.startsWith';
import regexBuilder from './regexBuilder';

class RegularWords {
	constructor(words) {
		this.words = words;
		this.captureCount = 0;
		this.captureMap = {};
		this.regex = regexBuilder.call(this, words);
	}

	test(string) {
		return this.regex.test(string);
	}
}

module.exports = RegularWords;
