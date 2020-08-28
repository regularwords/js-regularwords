export function mustHaveMoreThan({count, input}) {
	return `(?=(?:.*${input}){${count + 1}})`;
}

export function mustHaveLessThan({count, input}) {
	return `(?!(?:.*${input}){${count}})`;
}

export function lengthMustBeMoreThan({count}) {
	return `(?=.{${parseInt(count) + 1}})`;
}
