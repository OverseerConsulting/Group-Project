//var pdfParser = require('pdf-parser');
//pdfParser.workerSrc = "./node_modules/pdf-parser/lib/pdf.worker.js";

const methods = require("../pdfparser.js");
let checkDuplicate = methods.checkDuplicate;
let removePunctuation = methods.removePunctuation;

describe("Checking if words already exist in word list", function () {

    let wordList = [
        { word: 'test', count: 1 },
        { word: 'document', count: 1 },
        { word: 'pdf', count: 1 },
        { word: 'lorem', count: 7 }
    ];

    describe("Checking if an entry already exists", function () {

        test("Word 'friend' does not exist in the list, so 'null' should be returned", async () => {
            expect(checkDuplicate("friend", wordList)).toBe(null);
        });
        test("Word 'penguin' does not exist in the list, so 'null' should be returned", async () => {
            expect(checkDuplicate("penguin", wordList)).toBe(null);
        });
    });

    describe("Checking words that exist in the list", function () {

        test("Word 'test' exists in the list, so the index, '0', should be returned", async () => {
            expect(checkDuplicate("test", wordList)).toBe(0);
        });
        test("Word 'pdf' exists in the list, so the index, '2', should be returned", async () => {
            expect(checkDuplicate("pdf", wordList)).toBe(2);
        });
    });
});

describe("Removing punctuation from words", function () {

    test("Word 'asda*' should become 'asda'", async () => {
        expect(removePunctuation("asda*")).toBe("asda");
    });
    test("Word 'tom!' should become 'tom'", async () => {
        expect(removePunctuation("tom!")).toBe("tom");
    });
    test("Word ' ' should become ''", async () => {
        expect(removePunctuation(" ")).toBe("");
    });
    test("Word 'book...' should become 'book'", async () => {
        expect(removePunctuation("book...")).toBe("book");
    });
});