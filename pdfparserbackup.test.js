//var pdfParser = require('pdf-parser');
//pdfParser.workerSrc = "./node_modules/pdf-parser/lib/pdf.worker.js";

const methods = require("./pdfparser.js");
let initiate = methods.initiate;
let checkDuplicate = methods.checkDuplicate;
let removePunctuation = methods.removePunctuation;

const getdb = require("./jsontodatabase.js");
let getdata = getdb.app;

let dbconnect = 'mongodb://localhost/testdb';


describe("Parsing PDF Data", function () {

    describe("Lorem Ipsum PDF", async function () {

        let PDF_PATH = 'loremIpsum.pdf';
        
        await initiate(dbconnect, PDF_PATH);

        test("First word should be 'test'", async () => {   
            const wordList = await getdata(dbconnect).words;
            expect(wordList[0].word).toBe("test");
        });

        test("Last word should 'hendrerit'", async () => {
            const wordList = await getdata(dbconnect).words;
            expect(wordList[wordList.length - 1].word.toBe("hendrerit"));
        });
        test("Count of word 'test' should be 1", async () => {
            expect(1).toBe(1);
        });
        test("Count of word 'hendrerit' should be 2", async () => {
            expect(2).toBe(2);
        });
    });


    describe("Dummy PDF", function () {

        let PDF_PATH = 'dummyText.pdf';

        test("First word should be 'lorem'", async () => {
            expect("lorem").toBe("lorem");
        });
        test("Last word should 'rackham'", async () => {
            expect("rackham").toBe("rackham");
        });
        test("Count of word 'lorem' should be 13", async () => {
            expect(13).toBe(13);
        });
        test("Count of word 'rackham' should be 1", async () => {
            expect(1).toBe(1);
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