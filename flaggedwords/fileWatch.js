let Methods = require('./jsontomongo.js');
let chokidar = require('chokidar');
let pdfParse = require('../pdfparser.js');
let db = 'mongodb://overseerconsulting:FF5RkQR9cHA6BrTNZA5CAjQdb2nPiSjMh80uI0hndUa7smjhaMyWcUYuCcjNPf8kTjnp0ayVPnBViiov5moKtQ==@overseerconsulting.documents.azure.com:10255/harrypotternames?ssl=true';
let watcher = chokidar.watch('/var/lib/jenkins/workspace/Iteration1Branch/uploads', { ignored: /^\./, persistent: true });

let fileFormat;

watcher
	.on('add', function (path) {
		path = path.replace(/\\/g, "/");
		console.log('File', path, 'has been added');
		fileFormat = path.substr(path.lastIndexOf("."));

  if (fileFormat == ".txt" || fileFormat == ".csv") {
		Methods.writeToMongodb(path);
	}
	else if (fileFormat == ".pdf"){
		pdfParse.initiate(db, path);
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