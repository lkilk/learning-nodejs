var fs = require('fs');

function readFiles(files, callback) {
    var filesLeft = files.length;
    var contents = {};
    var error = null;var processContent = function(filePath) {
        return function(err, data){
            if (error !== null) {
                return;
            }
            if (err) {
                error = err;
                return callback(err);
            }
            contents[filePath] = data;
            if (!--filesLeft) {
                callback(null, contents);
            }
        }
    };
    files.forEach(function(filePath){
        fs.readFile(filePath, processContent(filePath));
    });
}

readFiles(['input.txt', 'output.txt'], function(err, contents){
    if (err) {
        console.log(err);
    } else {
        console.log(contents);
    }
});