//global vars
let songs = ["instrumental", "seven", "betty", "mirrorball", "august", "cardigan", "illicitAffairs", "exile", "thisIsMeTrying", "madWoman", "the1", "peace", "hoax", "epiphany", "myTearsRicochet", "theLastGreatAmericanDynasty", "invisibleString", "theLakes"]; // array of song names for string concatenation
let quotes = [" ", " ", "I'm only seventeen, I don’t know anything, but I know I miss you.", "I want you to know I’m a mirrorball, I can change everything about me to fit in.", "I can see us lost in the memory august sipped away like a bottle of wine, ‘cause you were never mine.", "When you are young they assume you know nothing, but I knew you.", "So you leave no trace behind, like you don't even exist.", "I think I’ve seen this film before, so im leaving out the side door", "I’ve been having a hard time adjusting, I had the shiniest wheels now they’re rusting", "and there's nothing like a mad woman, what a shame she went mad", "but it would've been fun, if you would've been the one", "would it be enough, if I could never give you peace?", "what you did was just as dark", "just one single glimpse of relief to make some sense of what you've seen", "and so the battle ships will sink beneath the waves", "there goes the loudest woman this town has ever seen. I had a marvelous time ruining everything", "one single thread of gold tied me to you", "a red rose grew up out of ice frozen ground, with no one around to tweet it", ""]
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




