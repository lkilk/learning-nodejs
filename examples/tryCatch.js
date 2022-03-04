const fs = require("fs");

try {
    var tracksString = fs.readFileSync('track-data.json');
    console.log(trackString);
} catch (e) {
    console.log('Problem reading file :' + e);
}

