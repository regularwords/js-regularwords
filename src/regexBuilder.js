import rules from './commands/commands';
import {escapeRegex} from './utils';

let lock = Object.keys(rules).map(num => rules[num].regex);

export default function builder(words) {
	let lines = words
		.trim()
		.split(/\n+/)
		.map(line => line.trim())
		.filter(line => !line.startsWith('//'));

	let regex = [];

	lines.forEach(line => {
		let understood = false;

		for (let i = 0; i < lock.length; i++) {
			let m = line.match(lock[i]);
			if (m) {
				understood = true;
				// "this" is the instance of RegularWords
				regex.push(rules[i].callback.call(this, ...m.splice(1).map(escapeRegex)));
				break;
			}
		}

		if (!understood) {
			throw new Error(`"${line}" was not understood.`);
		}

	});

	return new RegExp(regex.join(''));
}
