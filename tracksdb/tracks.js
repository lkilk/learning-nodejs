const fs = require('fs');

var fetchTracks = () => {
    try {
        var tracksString = fs.readFileSync('track-data.json');
        return JSON.parse(tracksString);
    } catch (e) {
        return [];
    }
}

var saveTracks = (tracks) => {
    fs.writeFileSync('track-data.json', JSON.stringify(tracks));
}

var addTrack = (artist, title, album) => {
    var tracks = fetchTracks();
    var track = {
        artist,
        title,
        album
    };
    tracks.push(track);
    saveTracks(tracks);
}

var listTracks = () => {
    return fetchTracks();
}

var getTrack = (title) => {
    var tracks = fetchTracks();
    var filteredTracks = tracks.filter((track) => {
        return track.title === title;
    });
    return filteredTracks[0];
}

var removeTrack = (title) => {
    var tracks = fetchTracks();
    var filteredTracks = tracks.filter((track) => {
        return track.title !== title;
    });
    saveTracks(filteredTracks);
}

module.exports = {
    addTrack,
    listTracks,
    getTrack,
    removeTrack
};