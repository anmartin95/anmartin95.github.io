let songs = ["seven", "betty", "mirrorball", "august", "cardigan"];
let index = 0;
var songFile = new Audio();

// flip book animation using jquery and flip.js library 
$('#flipbook').turn({
  width: 800,
  height: 575,

  page: 1,
  autoCenter: true, 

  duration: 3000, 
  // play song on page turn
  when:{
    turning:function(){
      index++;
      console.log(index);
      var tempSongFile = "audioFiles/" + songs[index] + ".mp3";
      songFile.pause();
      songFile.src = tempSongFile;
      songFile.play();
  }}
});

// Turn to the page 10
//$("#flipbook").turn("page", 10);

console.log($('#flipbook').turn("direction"));

// function nextSong(){}