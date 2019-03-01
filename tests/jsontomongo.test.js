let mongoose = require('mongoose');
let Methods = require('./returnAllFromDB.js');
let result = Methods.app();
const should = require("should");

describe('Testing if the data went into the database', async () => {
	test('The first value should have a name of "Alpha"', async () => {
		const nameTest = await result;
		expect(nameTest[0].Name).toBe("Alpha");
	});
	test('The first value should have a score of 1', async () => {
		const scoreTest = await result;
		await expect(scoreTest[0].Score).toBe(1);
	});
	test('The third value should not exist', async () => {
		const undefinedTest = await result;
		await expect(should.not.exist(undefinedTest[2]));
	});
});