let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const util = require('util')

let allText = "";
function inputCSVFile(file) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    let arrayOfWords = allText.split(/(?:\r\n)|(?:(?:,))/);
    return [file, arrayOfWords];
}

function outputJSON(input) {
    let inputArray = input[1];

    let finalArray = new Array();
    let startPoint;
    if (input[1][0] == "Word") {
        startPoint = 2;
    }
    else {
        startPoint = 0;
    }
    let rawFile = input[0].substring(input[0].lastIndexOf("/") + 1);
    let collectionName = rawFile.substring(0, rawFile.indexOf("."));
    let ListNameObject = new Object();
    let wordsArray = new Array();

    ListNameObject.ListName = collectionName;

    for (let i = startPoint; i < inputArray.length; i++) {

        let addJsonData = new Object();
        addJsonData.Word = inputArray[i];
        addJsonData.Score = inputArray[i + 1];
        wordsArray.push(addJsonData);

        i++;
    }
    ListNameObject.Words = wordsArray;
    finalArray.push(ListNameObject);
    
    let jsonArray = JSON.parse(JSON.stringify(finalArray))
    console.log(util.inspect(jsonArray, {showHidden: false, depth: null}))
    return jsonArray;
}
module.exports = { outputJSON, inputCSVFile };