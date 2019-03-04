var pdfParser = require('pdf-parser');
var fileAnalysis = require('./FileAnalysis.js');

var jsontodatabase = require('./jsontodatabase');
var writeToMongodb = jsontodatabase.writeToMongodb;
var writeListToMongodb = jsontodatabase.writeListToMongodb;
var deleteAllFromMongodb = jsontodatabase.deleteAllFromMongodb;
var deleteListsFromMongodb = jsontodatabase.deleteListsFromMongodb;

var mongoose = require('mongoose');

let PDF_PATH = 'loremIpsum.pdf';

//initiate('mongodb://localhost/testdb', PDF_PATH);

deleteAllFromMongodb('mongodb://localhost/testdb');
deleteListsFromMongodb('mongodb://localhost/testdb');

async function initiate(dbconnect, PDF_PATH) {
    let wordList;
    await pdfParser.pdf2json(PDF_PATH, async function (error, pdf) {
        await parse(dbconnect, error, pdf).then(function (value) {
            wordList = value;
        });
        //console.log(wordList);
    });

    return setTimeout(printList, 3000);

    function printList() {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        let listObject = {};
        //console.log(wordList);
        listObject.name = PDF_PATH.substring(0, PDF_PATH.length - 4);
        listObject.filename = PDF_PATH;
        listObject.time_stored = date + time;
        listObject.owner_id = 1;
        listObject.flaggedWordsList = "harrypotternames";
        listObject.words = wordList;



        fileAnalysis.analyseDocument(listObject);
        writeListToMongodb(dbconnect, listObject);
    }
}

async function parse(dbconnect, error, pdf) {
    return new Promise(function (resolve, reject) {
        if (error != null) {
            console.log(error);
        } else {
            let wordList = doParse(dbconnect, pdf);
            resolve(wordList);
        }
    });
}

function checkDuplicate(currentWord, wordList) {
    for (let i = 0; i < wordList.length; i++) {
        currentWord = currentWord.toLowerCase();
        if (wordList[i].word == currentWord) {
            return i;
        }
    }
    return null;
}

function removePunctuation(currentWord) {
    let punctuation = ["?", '"', ".", ",", "'", "!", ":", ";", "~", "*", " ", " "];
    let lastChar = currentWord[currentWord.length - 1];
    if (currentWord.includes("...")) {
        return currentWord.substring(0, currentWord.length - 3);
    } else if (punctuation.includes(lastChar)) {
        return currentWord.substring(0, currentWord.length - 1);
    }
    else {
        return currentWord;
    }
}

function doParse(dbconnect, pdf) {
    let wordList = [];
    let tempList = [];

    writeToMongodb(dbconnect, pdf);
    for (let i = 0; i < pdf.pages.length; i++) {
        for (let j = 0; j < pdf.pages[i].texts.length; j++) {
            tempList = pdf.pages[i].texts[j].text.split(" ");
            //console.log(tempList.length);
            for (let k = 0; k < tempList.length; k++) {
                //console.log(tempList[k]);
                tempList[k] = removePunctuation(tempList[k]);
                if (tempList[k] != "") {
                    if (checkDuplicate(tempList[k], wordList) == null) {
                        let tempWord = { "word": tempList[k].toLowerCase(), "count": 1 };
                        wordList.push(tempWord);
                    } else {
                        wordList[checkDuplicate(tempList[k], wordList)].count += 1;
                    }
                }
            }
        }
    }
    //console.log(wordList);
    return wordList;
}

module.exports = { parse, doParse, checkDuplicate, removePunctuation, initiate };