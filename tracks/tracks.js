const fs = require('fs');

var fetchTracks = () => {
    try {
        var tracksString = fs.readFileSync('track-data.json')
        return JSON.parse(tracksString);
    } catch (e) {
        return [];
    }
};

var saveTracks = (tracks) => {
    fs.writeFileSync('track-data.json', JSON.stringify(tracks));
};

var showTrack = (track) => {
    if (track) {
        console.log(`Title: ${track.title}`);
        console.log(`Artist: ${track.artist}`);
        console.log(`Album: ${track.album}`);
    } else {
        console.log('No such track');
    }
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
};

var removeTrack = (title) => {
    var tracks = fetchTracks();
    var filteredTracks = tracks.filter((track) => {
        return track.title !== title;
    });
    saveTracks(filteredTracks)
};

var listTrack = () => {
    return fetchTracks()
};

var getTrack = (title) => {
    var tracks = fetchTracks();
    var filteredTracks = tracks.filter((track) => {
        return track.title == title;
    });
    return filteredTracks[0];
};

module.exports = {
    addTrack,
    removeTrack,
    listTrack,
    getTrack,
    showTrack
};




