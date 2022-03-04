var express = require('express');
var app = express();
var tracks = require('./tracks');

app.use(express.urlencoded({extended: true}));
app.use(express.json());  

app.get('/', (request, response) => {
    response.sendFile(__dirname + '//tracks.html');
  });
  
  app.get('/doGet', (request, response) => {
    var responseTrack = tracks.getTrack(request.query.title);
    response.send(JSON.stringify(responseTrack));  
  });

  app.get('/remove', (request, response) => {
    var title = request.query.title;
    tracks.removeTrack(title);
    response.send(`<h2>Removed track ${title}</h2>`);
  });

  app.get('/list', (request, response) => {
    response.send(JSON.stringify(tracks.listTrack()));
  });

  app.post('/doPost', (request, response) => {
    tracks.addTrack(request.body.artist, 
        request.body.title, 
        request.body.album);        
    var responseTrack = {
        title: request.body.title,
        artist: request.body.artist,
        album: request.body.album
    };
    response.send(JSON.stringify(responseTrack));
  });

  app.listen(8081);