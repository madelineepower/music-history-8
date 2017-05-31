"use strict";

let $ = require('jquery'),
    db = require('./db-interact');


var showSongs = (data) => {
  var songs = data;
  let $listDisplay =
  $(`<section class="song-result"></section>`);
  $('#song-names').html($listDisplay);
  console.log("song array", songs);
  for (let song in songs) {
    let songList = `<div class="song">
                  <h5>${songs[song].name} </h5>
                  <p>${songs[song].artist} |</p>
                  <p>${songs[song].album} </p>
                  <a id="${song}" class="delete-btn waves-effect waves-light btn">delete</a>
                  </div>
                  <hr>`;
        $('.song-result').append(songList);
          }
    };


 let makeSongObj = () => {
   var newSongObject = new Object({});
       newSongObject.name = $("#song-input").val();
       newSongObject.artist = $("#artist-input").val();
       newSongObject.album = $("#album-input").val();
      $("#song-input").val("");
      $("#artist-input").val("");
      $("#album-input").val("");
      console.log(newSongObject);
      return newSongObject;
 };

module.exports = {showSongs, makeSongObj};
