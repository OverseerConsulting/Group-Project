--Upload Files README--

The server.js is a JavaScript file that is an Express server. This file works with Multer (a file upload package) and Crypto to allow the user to choose a file from their documents then click upload and it will get sent to a auto-created folder called 'uploads'. It is set so that the name of the file is encrypted with 16 random characters but it includes the file extension/ type so that it can be used with the application on the users computer.

It is connected by a proxy setting in the React Applications package.json file to the React server so that they can work concurrently.