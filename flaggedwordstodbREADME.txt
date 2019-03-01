--File Analysis README--

the FileAnalysis.js exposes a method called analyseDocument(document),

analyseDocument() takes in a document (in JSON format).
gets the flaggedWords from the database (at this point - always the harryPotterNames, due to the current structure of the database).
creates a report based on the data from the Document
posts the report to the database and also returns it.

therefore the database call will have to be done BEFORE it is passed into analyseDocument() using the documents.js model in /models.