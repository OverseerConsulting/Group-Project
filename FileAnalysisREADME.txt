--Flagged words to DB README--

the fileWatch.js watches a folder called "input" and will run either the pdf checker or the flagged words to db,

jsontomongo takes in a file path and sends it to csvtojson.
csvtojson reads in the file from the input folder, converts it into an array, checks if it has headers and loops through placing each array item into an object. That object is then exported as JSON back into jsontomongo.js

Once jsontomongo.js receives the JSON, it will split off the filename from the file path and remove the file extension and set that to be the mongo collection name. Afterwards, it will open up a database connection, input the JSON and save it to the right collection.
