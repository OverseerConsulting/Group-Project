let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let Methods = require("./csvtojson.js");
let outputJSON = Methods.outputJSON;
let inputCSVFile = Methods.inputCSVFile;
const fileLocation = "file://C:/Users/Administrator/Documents/Final_Project/";
const outputJSONConst = outputJSON(inputCSVFile(fileLocation + "csvTest.csv"));
const inputCSVFileText = inputCSVFile(fileLocation + "csvTest.csv");
const inputCSVFileTextNoHeaders = inputCSVFile(fileLocation + "csvTestNoHeaders.csv");

console.log(outputJSONConst);
console.log(inputCSVFile(fileLocation));

describe("JSON formatting test", function () {
    test("First 2 characters should be '[{'", function () {
        let firstTwo = JSON.stringify(outputJSONConst).substring(0, 2);
        expect(firstTwo).toBe("[{");
    });
    test("Last 2 characters should be '}]'", function () {
        let lastTwo = JSON.stringify(outputJSONConst).slice(-2);
        expect(lastTwo).toBe("}]");
    });
});

describe("Data test (CSV with headers)", function () {
    test("The first value should equal to the first part of the CSV's name, after skipping the headings", function () {
        expect(outputJSONConst[0].Name).toBe(inputCSVFileText[2]);
    });
    test("The Score should equal to the first part of the CSV's score, after skipping the headings", function () {
        expect(outputJSONConst[0].Score).toBe(inputCSVFileText[3]);
    });
});

describe("Data test (CSV without headers)", function () {
    test("The first value should equal to the first part of the CSV's name", function () {
        expect(outputJSONConst[0].Name).toBe(inputCSVFileTextNoHeaders[0]);
    });
    test("The Score should equal to the first part of the CSV's score", function () {
        expect(outputJSONConst[0].Score).toBe(inputCSVFileTextNoHeaders[1]);
    });
});

describe("No file test", function () {
    test("An error should be returned when the file doesn't exist", function () {
        expect(inputCSVFile("file://C:/Users/stuar/Documents/!Work/Node/fakeFile.txt")[0]).toBe('Error: ENOENT: no such file or directory');
    });
});