import RegularWords from './regular-words';

describe('Full String Lookaheads', () => {
	test('moreThan(#).letter(s)', () => {
		const regex1 = RegularWords.chain().mustHave.moreThan(0).letters.create();
		const regex2 = RegularWords.chain().mustHave.moreThan(0).letter.create();
		expect(regex1.toString()).toBe('/(?=(?:.*[a-zA-Z]){1})^.*$/');
		expect(regex1).toEqual(regex2);
	});

	test('moreThan(#).uppercaseLetter(s)', () => {
		const regex1 = RegularWords.chain().mustHave.moreThan(0).uppercaseLetters.create();
		const regex2 = RegularWords.chain().mustHave.moreThan(0).uppercaseLetter.create();
		expect(regex1.toString()).toBe('/(?=(?:.*[A-Z]){1})^.*$/');
		expect(regex1).toEqual(regex2);
	});

	test('moreThan(#).lowercaseLetter(s)', () => {
		const regex1 = RegularWords.chain().mustHave.moreThan(0).lowercaseLetters.create();
		const regex2 = RegularWords.chain().mustHave.moreThan(0).lowercaseLetter.create();
		expect(regex1.toString()).toBe('/(?=(?:.*[a-z]){1})^.*$/');
		expect(regex1).toEqual(regex2);
	});

	test('moreThan(#).numbers(s)', () => {
		const regex1 = RegularWords.chain().mustHave.moreThan(0).numbers.create();
		const regex2 = RegularWords.chain().mustHave.moreThan(0).number.create();
		expect(regex1.toString()).toBe('/(?=(?:.*\\d){1})^.*$/');
		expect(regex1).toEqual(regex2);
	});

	// LESS THANs

	test('lessThan(#).letter(s)', () => {
		const regex1 = RegularWords.chain().mustHave.lessThan(0).numbers.create();
		const regex2 = RegularWords.chain().mustHave.lessThan(0).number.create();
		expect(regex1.toString()).toBe('/(?!(?:.*\\d){0})^.*$/');
		expect(regex1).toEqual(regex2);
	});

	test('lessThan(#).uppercaseLetter(s)', () => {
		const regex1 = RegularWords.chain().mustHave.lessThan(0).uppercaseLetters.create();
		const regex2 = RegularWords.chain().mustHave.lessThan(0).uppercaseLetter.create();
		expect(regex1.toString()).toBe('/(?!(?:.*[A-Z]){0})^.*$/');
		expect(regex1).toEqual(regex2);
	});

	test('lessThan(#).lowercaseLetter(s)', () => {
		const regex1 = RegularWords.chain().mustHave.lessThan(0).lowercaseLetters.create();
		const regex2 = RegularWords.chain().mustHave.lessThan(0).lowercaseLetter.create();
		expect(regex1.toString()).toBe('/(?!(?:.*[a-z]){0})^.*$/');
		expect(regex1).toEqual(regex2);
	});

	test('lessThan(#).numbers(s)', () => {
		const regex1 = RegularWords.chain().mustHave.lessThan(0).numbers.create();
		const regex2 = RegularWords.chain().mustHave.lessThan(0).number.create();
		expect(regex1.toString()).toBe('/(?!(?:.*\\d){0})^.*$/');
		expect(regex1).toEqual(regex2);
	});
});
