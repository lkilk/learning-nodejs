const db = require('./dbcrud');

var addTrack = (artist, title, album) => {
    db.insertRow(title, artist, album);
}

var listTracks = () => {
    return db.selectAll();
}

var getTrack = (title) => {
    return db.selectRow(title);
}

var removeTrack = (title) => {
    db.deleteRow(title);
}

module.exports = {
    addTrack,
    listTracks,
    getTrack,
    removeTrack
}