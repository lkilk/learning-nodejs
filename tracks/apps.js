const fs = require('fs');
const tracks = require('./tracks.js');
var yargs = require('yargs');
const argv = yargs
        .options({
            c: {
                demand: true,
                alias: 'command',
                describe: 'enter list, add, get or remove',
                string: true
            },
            t: {
                alias: "title",
                string: true
            },
            a: {
                alias: "artist",
                string: true
            },
            b: {
                alias: "album",
                string: true
            } 
        })
    .help()
    .alias('help','h')
    .argv;

console.log(argv);
const _ = require('lodash');
var command = argv.command;

if(command === 'add') {
    tracks.addTrack(argv.artist, argv.title, argv.album);
} else if (command === 'remove') {
    tracks.removeTrack(argv.title);
    console.log(`Removed track ${track.title}`)
} else if (command === 'list') {
    var allTracks = tracks.listTrack();
    console.log(`Displaying ${allTracks.length} tracks`);
    allTracks.forEach((track) => {
        tracks.showTrack(track);
    });
} else if (command === 'get') {
    var track = tracks.getTrack(argv.title);
    tracks.showTrack(track);
} else {
    console.log(`Command not found`)
}

