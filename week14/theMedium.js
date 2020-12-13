//global vars
let songs = ["instrumental", "seven", "betty", "mirrorball", "august", "cardigan"]; // array of song names for string concatenation
let quotes = [" ", " ", "im only seventeen, I don’t know anything, but I know i miss you", "I want you to know I’m a mirrorball, I can change everything about me to fit in", "i can see us lost in the memory august sipped away like a bottle of wine, ‘cause you were never mine", "when you are young they assume you know nothing, but I knew you", "that's the thing about illicit affairs, and clandestine meetings, and longing stares"]
let tempIndex; // var for index of correct song
var songFile = new Audio();

// flip book animation using jquery and turn.js library 
$('#flipbook').turn({
  width: 830,
  height: 605,

  page: 1,
  autoCenter: true, 

  duration: 3000, 
});
// Turn to the page 10
//$("#flipbook").turn("page", 10);

//event listener "turning" - each time a page is turned, 
$("#flipbook").bind("turning", function(event, page, view) {
  if ((page%2) == 0){ // if page number is even (page turning right to left)
    tempIndex = (page/2) - 1; // sets the index for songs array to the corresponding page about that song
  }
    else {
    tempIndex = (page-3)/2;
    if (tempIndex < 0){
      tempIndex = 0;
    }
  }
  displayQuote(tempIndex);
  songFile.pause(); // previous song pauses when page starts turning
  var tempSongFile = "audioFiles/" + songs[tempIndex] + ".mp3";
  songFile.src = tempSongFile;
  songFile.play(); // new song plays
});

function displayQuote(i, p){
  $(document).ready(function(){;
    $(".appendedQuotes").empty();
    $(".appendedQuotes").append("<b>" + quotes[i] + "</b>");
    $("b").attr('id', quotes);
  });
  return;
};




