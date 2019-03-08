let dbGetAll = require('./testing/returnAllReportsFromDB.js');
let dbGetAllFlaggedWords = require('./testing/returnAllFlaggedWordsFromDB.js');
let expressGetAll = require('./testing/getAllReportsFromExpress.js');
let expressGetOne = require('./testing/getOneReportFromExpress.js');
let expressGetAllFlagged = require('./testing/getAllFlaggedWords.js');
let expressGetoneFlaggedWordList = require('./testing/getOneFlaggedWord');
let dbResult = dbGetAll.getAllReportsFromDB();
let dbFlaggedResult = dbGetAllFlaggedWords.getAllFlaggedWordsFromDB();
let expressAllResults = expressGetAll.getAllReportsFromExpress("http://localhost:3002/api/report");
let expressOneResult = expressGetOne.getOneReportFromExpress("http://localhost:3002/api/report/StonePages4-8.pdf")
let expressAllFlaggedResults = expressGetAllFlagged.getAllFlaggedWords("http://localhost:3002/api/flaggedWords");
let expressOneFlaggedResult = expressGetoneFlaggedWordList.getOneFlaggedWord("http://localhost:3002/api/flaggedWords/harrypotterWords");


describe('Testing if the data went into the database', async () => {
	test('The first entry should have a document name of "StonePage3.pdf"', async () => {
        const fileNameTest = await dbResult;
		expect(fileNameTest[0].document).toEqual("StonePage3.pdf");
	});
	test('The first entry should have a word count of 511', async () => {
		const wordCountTest = await dbResult;
		await expect(wordCountTest[0].wordCount).toEqual("511");
	});
});

describe('Testing if the get all request works', async () => {
	test('The first entry should have a document name of "StonePage3.pdf"', async () => {
		const fileNameTest = await expressAllResults;
		expect(fileNameTest[0].document).toEqual("StonePage3.pdf");
	});
	test('The first entry should have a word count of 511', async () => {
		const wordCountTest = await expressAllResults;
		await expect(wordCountTest[0].wordCount).toEqual("511");
    });
    test('The third entry should have a document name of "StonePages4-8.pdf"', async () => {
		const fileNameTest = await expressAllResults;
		expect(fileNameTest[1].document).toEqual("StonePages4-8.pdf");
	});
	test('The third entry should have a word count of 1819', async () => {
		const wordCountTest = await expressAllResults;
		await expect(wordCountTest[1].wordCount).toEqual("1819");
	});
});

describe('Testing if the get one request works', async () => {
    test('The returned entry should have a document name of "StonePages4-8.pdf"', async () => {
		const fileNameTest = await expressOneResult;
		expect(fileNameTest[0].document).toEqual("StonePages4-8.pdf");
	});
	test('The returned entry should have a word count of 1819', async () => {
		const wordCountTest = await expressOneResult;
		await expect(wordCountTest[0].wordCount).toEqual("1819");
	});
});


describe('Testing if the Flagged words  went into the database', async () => {
	test('The first entry should have a document name of "harrypotterWords"', async () => {
        const ListNameTest = await dbFlaggedResult;
		expect(ListNameTest[0].ListName).toEqual("harrypotterWords");
	});
	test('The first entry should have a word of Hannah', async () => {
		const wordTest = await dbFlaggedResult;
		await expect(wordTest[0].Words[0].Word).toEqual("Hannah");
	});
});
describe('Testing if the get all request works', async () => {
	test('The first entry should have a document name of "harrypotterWords"', async () => {
		const ListNameTest = await expressAllFlaggedResults;
		expect(ListNameTest[0].ListName).toEqual("harrypotterWords");
	});
	test('The first entry should have a word name of Hannah', async () => {
		const wordTest = await expressAllFlaggedResults;
		await expect(wordTest[0].Words[0].Word).toEqual("Hannah");
    });
});
describe('Testing if the get one request works', async () => {
    test('The returned entry should have a document name of "harrypotterWords"', async () => {
		const ListNameTest = await expressOneFlaggedResult;
		expect(ListNameTest[0].ListName).toEqual("harrypotterWords");
	});
});