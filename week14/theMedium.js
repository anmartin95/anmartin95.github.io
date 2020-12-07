let songs = ["seven", "betty"];
let index = 0;

// flip book animation using jquery and flip.js library 
$('#flipbook').turn({
  width: 800,
  height: 575,

  page: 1,
  autoCenter: true, 

  duration: 3000, 
  /*when: {
    turning: function(e, page, view) {  
        var audio = document.getElementById("audio");
        audio.play();
    }
} */
});
$("#flipbook").bind("turned", function(event, page, view) { 
  alert("Page: "+page);
});


// Turn to the page 10
//$("#flipbook").turn("page", 10);