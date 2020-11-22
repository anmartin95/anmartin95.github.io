/*

// global variables
var myFallingObject;
var myOrder;
var correctOrder = [];

// using each() function to iterate through divs and push id of each div into array $objs
var $objs = [];
$('div').each(function(){
    var id = $(this).attr('id');
    $objs.push(id);
});
console.log($objs);

// selecting random id of divs from $objs and storing it in newObj
function randObj(){
  const newObj = $objs[Math.floor(Math.random()* $objs.length)];
  //storing randomly selected img in url string
  var img = "images/" + newObj + ".jpg";
  return img;
}

// generating new object every 3 seconds
function generateNew(){
    setInterval(function(){
        myFallingObject= new createImg(20, 30, randObj(), 10, 120, "image");
        }, 3000);
}

function createImg (width, height, imgUrl, x, y, type){
  this.type = type;
  if (type == "image"){
      this.image = new Image();
      this.image.src = imgUrl;
  }
  this.width = width;
  this.height = height;
  this.speed = 1;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.update = function() {
      var ctx = myGameArea.context;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

function dropBox(){
    var length = random(100, ($(".game").width() - 100));
    var velocity = random(850, 3000);
    var thisBox = $("<div/>", {
      class: "box",
      style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
    }); 
    
    //set data and bg based on data
    thisBox.data("test", Math.round(Math.random()));
    if(thisBox.data("test")){
      thisBox.css({"background": "url('images/wholeMilk.jpg')", "background-size":"contain"});
    } else {
      thisBox.css({"background": "url('images/oatMilk.jpg')", "background-size":"contain"});
    }
}

function startGame() {
    randOrder();
    myGameArea.start();
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 3000);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea() {
    myFallingObject.generateNew();
}
*/
// arrays of order options
const milks = ["whole milk", "skim milk", "2% milk", "oat milk", "almond milk", "coconut milk", "soy milk", "no milk", "cream", "foam"];
const addIns = ["splenda", "sweet n low", "cinnamon", "sugar", "no sugar"];
const syrups = ["caramel", "vanilla", "mocha", "hazelnut", "no", "pumpkin spice", "white chocolate"];
const drinks = ["dark roast", "light roast", "medium roast", "americano", "espresso", "macchiato", "latte", "cold brew", "green tea", "black tea", "chai"];
const temp = ["hot", "iced"];

// array of array names
const types = ["milks", "addIns", "syrups", "drinks", "temp"];

// global vars
var myOrder;

// function to generate new coffee order each game
function randOrder(){
  const randMilk = milks[Math.floor(Math.random()* milks.length)];
  const randAddIn = addIns[Math.floor(Math.random()* addIns.length)];
  const randSyrup = syrups[Math.floor(Math.random()* syrups.length)];
  const randDrink = drinks[Math.floor(Math.random()* drinks.length)];
  const randTemp = temp[Math.floor(Math.random()* temp.length)];
  myOrder = randTemp + " " + randDrink + " with " + randMilk + ", " + randAddIn + ", and " + randSyrup + " syrup";
  console.log(myOrder);
}

$(document).ready(function() {
  document.write(myOrder);
  $('.button').click(function() {
      var spread = $('.canvas').width(); //fill whole canvas
      setInterval(function(){
        var type = types[Math.floor(Math.random()* types.length)];
        RandomFalling(type, 1, 2, -100, -20, spread, 10, 120, 100, 150, 1400, 1700);
        }, 3000);
  });
});

//start falling elements
function RandomFalling(classname, num_variations, num_elements, top_pos, left_pos, spread, min_rotation, max_rotation, min_timeout, max_timeout, min_duration, max_duration) 
{
	var variation, left_offset, duration, timeout = 0, rotateZ;
	for (var i=1; i <= num_elements; i++) {
		variation = Math.floor((Math.random() * num_variations) + 1); //random CSS class
		left_offset = Math.floor((Math.random() * spread) + left_pos); //set left position
		duration = Math.floor((Math.random() * (max_duration-min_duration)) + min_duration); //random fall duration
		rotateZ = Math.floor((Math.random() * (max_rotation-min_rotation)) + min_rotation);	//random rotation angle
		timeout = timeout + Math.floor((Math.random() * (max_timeout-min_timeout)) + min_timeout);
		$element = $('<div class="falling-object '+classname+variation+'" style="top: '+top_pos+'px; left: '+left_offset+'px;" />');
		$element.appendTo('.canvas');
		$element.delay(timeout).animate({ top: 300, rotateZ: rotateZ}, {
			duration: duration,
			easing: 'linear',
			step: function(now, tween) {
				if (tween.prop === "rotateZ") {
					$(this).css('-webkit-transform','rotateZ('+now+'deg)');
					$(this).css('-moz-transform','rotateZ('+now+'deg)'); 
					$(this).css('transform','rotateZ('+now+'deg)');  
				}
			},
			complete: function() {
				$(this).remove();	//clean up the element
			}
		});
	}
}