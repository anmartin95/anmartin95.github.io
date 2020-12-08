//global vars
let songs = ["seven", "betty", "mirrorball", "august", "cardigan"]; // array of song names for string concatenation
let tempIndex; // var for index of correct song
var songFile = new Audio();

// flip book animation using jquery and turn.js library 
$('#flipbook').turn({
  width: 800,
  height: 575,

  page: 1,
  autoCenter: true, 

  duration: 3000, 
});
// Turn to the page 10
//$("#flipbook").turn("page", 10);

//event listener "turning" - each time a page is turned, 
$("#flipbook").bind("turning", function(event, page, view) {
  if ((page%2) == 0) // if page number is even (page turning right to left)
    tempIndex = (page/2) - 1; // sets the index for songs array to the corresponding page about that song
  else 
    tempIndex = (page-3)/2;
  songFile.pause(); // previous song pauses when page starts turning
  var tempSongFile = "audioFiles/" + songs[tempIndex] + ".mp3";
  songFile.src = tempSongFile;
  songFile.play(); // new song plays
});
