let songs = ["seven", "betty", "mirrorball", "august", "cardigan"];
let index = 0;

// flip book animation using jquery and flip.js library 
$('#flipbook').turn({
  width: 800,
  height: 575,

  page: 1,
  autoCenter: true, 

  duration: 3000, 
  when:{
    turning:function(){songFile.playSong();
  }}
});

// Turn to the page 10
//$("#flipbook").turn("page", 10);

function createAudioTag(song){
  var newSong = document.createElement('audio');
  var newSrc = document.createElement('source');
  newSrc.setAttribute('src', song);
  newSong.appendChild(newSrc);
  newSong.load()
  newSong.playSong=function(){
    newSong.pause();
    newSong.currentTime=0;
    newSong.play();
  }
  return newSong;
}

console.log($('#flipbook').turn("direction"));
var tempSongFile = "audioFiles/" + songs[index] + ".mp3";
index++;
var songFile = createAudioTag(tempSongFile);