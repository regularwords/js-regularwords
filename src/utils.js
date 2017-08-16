export function escapeRegex(s) {
	return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export function regexToString(regex) {
	return regex.toString().replace(/^\/(.*)\/$/, '$1');
}
