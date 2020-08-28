import './polyfills/String.startsWith';
import regexBuilder from './regexBuilder';

import * as compilers from './composition/compilers';
import {supportsOf} from './composition/support-functions/of';
import {supportsMoreThan} from './composition/support-functions/more-than';

class Poo {
	constructor() {
		this.parts = [];
	}

	_makePart() {
		const part = {next: this};
		this.parts.push(part);
		return part;
	}

	mustHaveLessThan(count) {
		const state = this._makePart();
		state.type = 'full-string-lookahead';
		state.compiler = 'mustHaveLessThan';
		state.count = count;

		return Object.assign(
			{},
			supportsOf(state)
		);
	}

	create() {
		console.log('Crushed it');
	}
}

export default class RegularWords {
	constructor(words) {
		this.words = words;
		this.captureCount = 0;
		this.captureMap = {};
		this.regex = regexBuilder.call(this, words);
	}

	test(string) {
		return this.regex.test(string);
	}

	static chain() {
		const parts = [];

		const next = {
			create() {
				const compiled = parts.map((part) => {
					return compilers[part.compiler](part);
				});

				const allFullStringAssertions = parts.length && parts.every(part => part.type === 'full-string-lookahead');
				if (allFullStringAssertions) {
					compiled.push('^.*$');
				}

				// console.log(JSON.stringify(parts, null, 4));
				return new RegExp(compiled.join(''));
			},
			mustHaveLessThan(count) {
				const state = {
					type: 'full-string-lookahead',
					compiler: 'mustHaveLessThan',
					count,
					next,
				};

				parts.push(state);

				return Object.assign(
					{},
					supportsOf(state)
				);
			},
			mustHaveMoreThan(count) {
				const state = {
					type: 'full-string-lookahead',
					compiler: 'mustHaveMoreThan',
					count,
					next,
				};

				parts.push(state);

				return Object.assign(
					{},
					supportsOf(state)
				);
			},

			mustHaveLengthMoreThan(count) {
				const state = {
					type: 'full-string-lookahead',
					compiler: 'lengthMustBeMoreThan',
					count,
					next,
				};

				parts.push(state);

				return next;
			},
		};

		Object.assign(
			next,
			supportsMoreThan(next)
			);

		return next;
	}
}
