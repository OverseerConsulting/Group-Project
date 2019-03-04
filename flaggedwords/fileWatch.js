let Methods = require('./jsontomongo.js');
let chokidar = require('chokidar');

let watcher = chokidar.watch('C:/Users/Administrator/Documents/Final_Project/input/', { ignored: /^\./, persistent: true }); //SET THIS

let fileFormat;

watcher
	.on('add', function (path) {
		path = path.replace(/\\/g, "/");
		console.log('File', path, 'has been added');
		fileFormat = path.substr(path.lastIndexOf("."));

  if (fileFormat == ".txt" || fileFormat == ".csv") {
		Methods.writeToMongodb(path);
	}
	else{
		
	}
})
	.on('change', function (path) {
		console.log('File', path, 'has been changed');
	})
	.on('unlink', function (path) {
		console.log('File', path, 'has been removed');
	})
	.on('error', function (error) {
		console.error('Error happened', error);
	})