const startsWith = require('../../src/polyfills/String.startsWith');
const assert = require('assert');

describe('String.prototype.startsWith polyfill', () => {
	const originalPrototypeValue = String.prototype.startsWith;
	beforeAll(() => (String.prototype.startsWith = startsWith));
	afterAll(() => (String.prototype.startsWith = originalPrototypeValue));

	const testStr = 'hippopotamus';

	it('should return false when testing "hiss" against "hippopotamus"', () => {
		assert.equal(false, testStr.startsWith('hiss'));
	});

	it('should return true when testing "hippo" against "hippopotamus"', () => {
		assert.equal(true, testStr.startsWith('hippo'));
	});

	it('should return true when testing "pot" against "hippopotamus" with starting position 5', () => {
		assert.equal(true, testStr.startsWith('pot', 5));
	});
});


describe('Boomtastic', () => {
	it('should be legit');
});
