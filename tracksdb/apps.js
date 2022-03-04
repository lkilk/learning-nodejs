const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');
const tracks = require('./tracksdb');
const argv = yargs
    .options({
        c: {
            demand: true,
            alias: 'command',
            describe: 'enter list, add, get or remove',
            string: true
        },
        t: {
            alias: 'title',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

var command = argv.command;

if (command === 'add') {
    tracks.addTrack(argv.artist, argv.title, argv.album);
} else if (command === 'list') {
    tracks.listTracks()
        .then((allTracks) => {
            console.log('Displaying all tracks');
            allTracks.forEach((track) => {
                console.log(`${track.title} by ${track.artist} from ${track.album}`);
            } )
        }).catch(err => console.log(err))
} else if (command === 'get') {
    tracks.getTrack(argv.title)
        .then((track) => {
            //if (track) {
                console.log(`Title: ${track.title}`);
                console.log(`Artist: ${track.artist}`);
                console.log(`Album: ${track.album}`);      
            //}
        }).catch(err => console.log(err));
} else if (command === 'remove') {
    tracks.removeTrack(argv.title);
    console.log(`Removed track ${argv.title}`);
} else {
    console.log('Command not found');
}