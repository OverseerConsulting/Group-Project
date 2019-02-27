var pdfParser = require('pdf-parser');

let PDF_PATH = 'loremIpsum.pdf';

initiate(PDF_PATH);


async function initiate(PDF_PATH) {
    let wordList = [];
    pdfParser.pdf2json(PDF_PATH, async function (error, pdf) {
        await parse(error, pdf).then(function (value) {
            wordList = value;
        });
        console.log("eh?");
        console.log(wordList);
        console.log("KAREN WHY");
        return wordList;
    });
}

async function parse(error, pdf) {
    return new Promise(function (resolve, reject) {
        if (error != null) {
            console.log(error);
        } else {
            let wordList = doParse(pdf);

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

function doParse(pdf) {
    let wordList = [];
    let tempList = [];

    for (let i = 0; i < pdf.pages.length; i++) {
        for (let j = 0; j < pdf.pages[i].texts.length; j++) {
            tempList = pdf.pages[i].texts[j].text.split(" ");
            //console.log(tempList.length);
            for (let k = 0; k < tempList.length; k++) {
                //console.log(tempList[k]);
                tempList[k] = removePunctuation(tempList[k]);
                if (tempList[k] != "") {
                    if (checkDuplicate(tempList[k], wordList) == null) {
                        tempWord = { "word": tempList[k].toLowerCase(), "count": 1 };
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