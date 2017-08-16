import regexBuilder from '../../regexBuilder';
import {regexToString} from '../../utils';

export default [
	[
		function (captureName, command) {
			const regex = regexToString(regexBuilder(command));
			this.captureMap[captureName] = ++this.captureCount;
			return `(${regex})`;
		},
		/as ([a-z]+),? (.*)$/,
	],
	[
		function (captureName) {
			return `\\${this.captureMap[captureName]}`;
		},
		/match capture ([a-z]+)/,
	],
];
