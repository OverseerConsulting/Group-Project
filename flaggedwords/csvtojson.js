let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
    return arrayOfWords;
}

function outputJSON(input) {
    let inputArray = input;

    //console.log(inputArray);
    let finalArray = new Array();
    let startPoint;
    if (inputArray[1] == "Score") { 
        startPoint = 2; 
    }
    else { 
        startPoint = 0; 
    }
    for (let i = startPoint; i < inputArray.length; i++) {
        let addJsonData = new Object();
        addJsonData.Name = inputArray[i];
        addJsonData.Score = inputArray[i + 1];
        finalArray.push(addJsonData);
        i++;
    }
    let jsonArray = JSON.parse(JSON.stringify(finalArray))
    //console.log(jsonArray);
    return jsonArray;
}
module.exports = { outputJSON, inputCSVFile };