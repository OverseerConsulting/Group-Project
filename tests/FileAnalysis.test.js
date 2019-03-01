const fileAnalyser = require('../FileAnalysis.js');
let analyseFile = fileAnalyser.analyseDocument;
let db = require('../DBinteraction.js');

afterAll(async () => {
    await db.removeReport("testFile");
});

let testDoc1 = {
    name: "testFile",
    filename: "122h2bab2.pdf",
    time_stored: "",
    ownder_id: 1,
    flaggedWordsList: "harrypotternames",
    words: [
        {
            word: "harry",
            count: 50
        },
        {
            word: "wand",
            count: 5
        },
        {
            word: "test",
            count: 2
        },
        {
            word: "thing",
            count: 8
        }
    ]
}

let testDoc2 = {
    name: "testFile",
    filename: "122h2bab2.pdf",
    time_stored: "",
    ownder_id: 1,
    flaggedWordsList: "harrypotternames",
    words: [
        {
            word: "harry",
            count: 2
        },
        {
            word: "reformat",
            count: 99
        },
        {
            word: "me",
            count: 2
        },
        {
            word: "wand",
            count: 5
        },
        {
            word: "test",
            count: 2
        },
        {
            word: "thing",
            count: 7
        }
    ]
}
describe("File Analyser", function () {
    describe("Testing Document 1", function () {

        test("Document 1 should have a total word count of 65", async () => {
            const testReport1 = await analyseFile(testDoc1);
            expect(testReport1.wordCount).toBe(65);
        });
        test("Document 1 should have a score of 450", async () => {
            const testReport1 = await analyseFile(testDoc1);
            expect(testReport1.score).toBe(450);
        })
        test('Document 1 should have a flagged percentage of 76.9%', async () => {
            const testReport1 = await analyseFile(testDoc1);
            expect(testReport1.flagPercent).toBe("0.769");
        })
        test('Document 1 should be set to analysed', async () => {
            const testReport1 = await analyseFile(testDoc1);
            expect(testReport1.status).toBe("analysed");
        })
        test('Document 1 should be classified as High Priority', async () => {
            const testReport1 = await analyseFile(testDoc1);
            expect(testReport1.rank).toBe("Maximum Priority");
        })
    })

    describe("Testing Document 2", function () {
        test("Document 2 should have a total word count of 117", async () => {
            const testReport2 = await analyseFile(testDoc2);
            expect(testReport2.wordCount).toBe(117);
        });
        test("Document 2 should have a score of 18", async () => {
            const testReport2 = await analyseFile(testDoc2);
            expect(testReport2.score).toBe(18);
        })
        test('Document 2 should have a flagged percentage of 1.71%', async () => {
            const testReport2 = await analyseFile(testDoc2);
            expect(testReport2.flagPercent).toBe("0.0171");
        })
        test('Document 2 should be set to analysed', async () => {
            const testReport2 = await analyseFile(testDoc2);
            expect(testReport2.status).toBe("analysed");
        })
        test('Document 2 should be classified as Lowest Priority', async () => {
            const testReport2 = await analyseFile(testDoc2);
            expect(testReport2.rank).toBe("Lowest Priority");
        })
    })
})