function lengthMustBe(len) {
	return `(?=.{${len}})(?!.{${parseInt(len) + 1}})`;
}

function lengthMustNotBe(len) {
	return `(?!(?=.{${len}})(?!.{${parseInt(len) + 1}}))`;
}

function lengthMustBeMoreThan(len) {
	return `(?=.{${parseInt(len) + 1}})`;
}

function lengthMustBeAtLeast(len) {
	return `(?=.{${len}})`;
}

function lengthMustBeLessThan(len) {
	return `(?!.{${len}})`;
}

function lengthMustBeBetween(min, max) {
	return `(?=.{${min}})(?!.{${parseInt(max) + 1}})`;
}

function lengthMustNotBeBetween(min, max) {
	return `(?!(?=.{${min}})(?!.{${parseInt(max) + 1}}))`;
}

export default [
	[
		lengthMustBe,
		/^length must be (\d+)$/,
	],
	[
		lengthMustNotBe,
		/^length must not be (\d+)$/,
	],
	[
		lengthMustBeMoreThan,
		/^length must be more than (\d+)$/,
	],
	[
		lengthMustBeAtLeast,
		/^length must be at least (\d+)$/,
	],
	[
		lengthMustBeLessThan,
		/^length must be less than (\d+)$/,
	],
	[
		lengthMustBeBetween,
		/^length must be between (\d+) and (\d+)$/,
	],
	[
		lengthMustNotBeBetween,
		/^length must not be between (\d+) and (\d+)$/,
	],
];
