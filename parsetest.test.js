//var pdfParser = require('pdf-parser');
//pdfParser.workerSrc = "./node_modules/pdf-parser/lib/pdf.worker.js";

const methods = require("./workingbackup.js");
let initiate = methods.initiate;
let checkDuplicate = methods.checkDuplicate;
let removePunctuation = methods.removePunctuation;

const getData = require("./mongogetall.js")

describe("Parsing PDF Data", async function () {
    describe("Lorem Ipsum PDF", async function () {

        let PDF_PATH = 'loremIpsum.pdf';

        test("First word should be 'test'", () => {
            initiate();
        });
    });

    test("Last word should 'hendrerit'", async () => {
        const wordList = await initiate(PDF_PATH);
        console.log(wordList);
        expect(wordList[wordList.length - 1].word.toBe("hendrerit"));
    });
    test("Count of word 'test' should be 1", () => {
        expect(initiate(PDF_PATH)[0].count.toBe(1));
    });
    test("Count of word 'hendrerit' should be 2", () => {
        expect(initiate(PDF_PATH)[initiate(PDF_PATH).length - 1].count.toBe(2));
    });
});


describe("Dummy PDF", function () {

    let PDF_PATH = 'dummyText.pdf';

    test("First word should be 'lorem'", () => {
        expect(inititate(PDF_PATH)[0].word).toBe("lorem");
    });
    test("Last word should 'rackham'", () => {
        expect(initiate(PDF_PATH)[initiate(PDF_PATH).length - 1].word.toBe("rackham"));
    });
    test("Count of word 'lorem' should be 13", () => {
        expect(initiate(PDF_PATH)[0].count.toBe(13));
    });
    test("Count of word 'rackham' should be 1", () => {
        expect(initiate(PDF_PATH)[initiate(PDF_PATH).length - 1].count.toBe(1));
    });
});
});


describe("Checking if words already exist in word list", function () {

    let wordList = [
        { word: 'test', count: 1 },
        { word: 'document', count: 1 },
        { word: 'pdf', count: 1 },
        { word: 'lorem', count: 7 }
    ];

    describe("Checking if an entry already exists", function () {

        test("Word 'friend' does not exist in the list, so 'null' should be returned", () => {
            expect(checkDuplicate("friend", wordList)).toBe(null);
        });
        test("Word 'penguin' does not exist in the list, so 'null' should be returned", () => {
            expect(checkDuplicate("penguin", wordList)).toBe(null);
        });
    });

    describe("Checking words that exist in the list", function () {

        test("Word 'test' exists in the list, so the index, '0', should be returned", () => {
            expect(checkDuplicate("test", wordList)).toBe(0);
        });
        test("Word 'pdf' exists in the list, so the index, '2', should be returned", () => {
            expect(checkDuplicate("pdf", wordList)).toBe(2);
        });
    });
});

describe("Removing punctuation from words", function () {

    test("Word 'asda*' should become 'asda'", () => {
        expect(removePunctuation("asda*")).toBe("asda");
    });
    test("Word 'tom!' should become 'tom'", () => {
        expect(removePunctuation("tom!")).toBe("tom");
    });
    test("Word ' ' should become ''", () => {
        expect(removePunctuation(" ")).toBe("");
    });
    test("Word 'book...' should become 'book'", () => {
        expect(removePunctuation("book...")).toBe("book");
    });
});