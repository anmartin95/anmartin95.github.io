
// arrays of order options
const milks = ["whole milk", "skim milk", "2% milk", "oat milk", "almond milk", "coconut milk", "soy milk", "cream", "foam", "no milk"];
const addIns = ["splenda", "sweet n low", "sugar in the raw", "cinnamon", "sugar", "no sugar"];
const syrups = ["caramel", "vanilla", "mocha", "hazelnut", "no", "pumpkin spice", "white chocolate"];
const drinks = ["dark roast", "light roast", "medium roast", "americano", "espresso", "macchiato", "latte", "cold brew", "green tea", "black tea", "chai"];
const temp = ["hot", "iced"];

// global vars
var milkNum = Math.floor(Math.random()* milks.length);
var addInNum = Math.floor(Math.random()* addIns.length);
var syrupNum = Math.floor(Math.random()* syrups.length);
var drinkNum = Math.floor(Math.random()* drinks.length);
var tempNum = Math.floor(Math.random()* temp.length)
var correctRands = [];
var myOrder = "";

// function to generate new coffee order each game
function randOrder(){
  const randMilk = milks[milkNum];
  const randAddIn = addIns[addInNum];
  const randSyrup = syrups[syrupNum];
  const randDrink = drinks[drinkNum];
  const randTemp = temp[tempNum];
  myOrder = randTemp + " " + randDrink + " with " + randMilk + ", " + randAddIn + ", and " + randSyrup + " syrup";
  correctRands = [randMilk, randAddIn, randSyrup, randDrink, randTemp];
  $('.order').text('Order: '+myOrder);
}
randOrder();

var $objs = [];
$('.options').each(function(){
    var id = $(this).attr('id');
    $objs.push(id);
});
console.log($objs);

//bind buttons on document ready
$(document).ready(function() {
    $('.button').click(function() {
		$('.button').animate({opacity: "0"});
        startGame();
    });
});
/* $('.cup').animate({opacity: "1"});
	$('.cup').click(function(){
		if ($('.cup').aatr('id') == randTemp)
		{
			$('.cup').animate({opacity: "0"});
		}
		else{
			$('.cup').animate({opacity: "0"});
			$('.canvas').text('Game Over');
		}
	});
	*/
function startGame(){
	var type = $objs[Math.floor(Math.random() * $objs.length)]; //type of graphic
	var width = $('.canvas').width(); //fill whole canvas
	fallingImg(type, 3, 100, -100, -20, width, 10, 120, 50, 3000, 3000, 7000);
}

var variation, className;
//sprinkle falling elements
function fallingImg(classname, numVars, numTotal, y, x, spread, minRotate, maxRotate, minStartTime, maxStartTime, minTime, maxTime) {
	var leftMargin, time, startTime = 0, rotateImg;
	for (var i=1; i <= numTotal; i++) {
		className = classname;
		variation = Math.floor((Math.random() * numVars) + 1); //random CSS img
		leftMargin = Math.floor((Math.random() * spread) + x); //set left position
		time = Math.floor((Math.random() * (maxTime-minTime)) + minTime); //random fall duration
		rotateImg = Math.floor((Math.random() * (maxRotate-minRotate)) + minRotate);	//random rotation angle
		startTime = startTime + Math.floor((Math.random() * (maxStartTime-minStartTime)) + minStartTime);
		$element = $('<div class="fallingImg '+classname+variation+'" style="top: '+y+'px; left: '+leftMargin+'px;" />');
		$element.appendTo('.canvas');
		$element.delay(startTime).animate({ top: 510, rotateZ: rotateImg}, {
			duration: time,
			easing: 'linear',
			step: function(now, tween) {
				if (tween.prop === "rotateZ") {
					$(this).css('-webkit-transform','rotateZ('+now+'deg)');
					$(this).css('-moz-transform','rotateZ('+now+'deg)'); 
					$(this).css('transform','rotateZ('+now+'deg)');  
				}
			},
		});
	}
}

/*function correctOption(){
	if (className==)
}
*/

