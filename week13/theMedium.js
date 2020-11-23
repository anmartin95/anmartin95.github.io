
// arrays of order options
const milks = ["whole milk", "skim milk", "2% milk", "oat milk", "almond milk", "coconut milk", "soy milk", "cream", "foam", "no milk"];
const addIns = ["splenda", "sweet n low", "sugar in the raw", "cinnamon", "sugar"];
const syrups = ["caramel", "vanilla", "mocha", "hazelnut", "no", "pumpkin spice", "white chocolate"];
const drinks = ["dark roast", "light roast", "medium roast", "americano", "espresso", "macchiato", "latte", "cold brew", "green tea", "black tea", "chai"];
const temp = ["hot", "iced"];
var names = ["milks", "addIns", "syrups", "drinks"];

// global vars
var milkNum = Math.floor(Math.random()* milks.length);
var addInNum = Math.floor(Math.random()* addIns.length);
var syrupNum = Math.floor(Math.random()* syrups.length);
var drinkNum = Math.floor(Math.random()* drinks.length);
var tempNum = Math.floor(Math.random()* temp.length);

var randMilk = milks[milkNum];
var randAddIn = addIns[addInNum];
var randSyrup = syrups[syrupNum];
var randDrink = drinks[drinkNum];
var randTemp = temp[tempNum];
var myOrder = "";
var correctRands = [randMilk, randAddIn, randSyrup, randDrink];
var correctNums = [milkNum, addInNum, syrupNum, drinkNum];

console.log(correctNums);

// function to generate new coffee order each game
function randOrder(){
  myOrder = randTemp + " " + randDrink + " with " + randMilk + ", " + randAddIn + ", and " + randSyrup + " syrup";
  $('.order').text('Order: '+myOrder);
}
randOrder();

var $objs = [];
$('.options').each(function(){
    var id = $(this).attr('id');
    $objs.push(id);
});
console.log($objs);

//creates gamne piece for user to move cup
let cup = document.querySelector('.cup');
let moveBy = 20;
 
window.addEventListener('load', () => {
    cup.style.position = 'absolute';
    cup.style.left = 0;
    cup.style.bottom = 0;
});
let cupPos = 54;
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
			cup.style.left = parseInt(cup.style.left) - moveBy + '.8px';
			cupPos -= 19.2
            break;
        case 'ArrowRight':
			cup.style.left = parseInt(cup.style.left) + moveBy + '.8px';
			cupPos += 19.2;
            break;
	}
	console.log(cupPos);
});

//bind buttons on document ready
$(document).ready(function() {
    $('.button').click(function() {
		$('.button').animate({opacity: "0"});
        startGame();
    });
});

let cupID;
function startGame(){
	var width = $('.canvas').width(); //fill whole canvas
	fallingImg(11, 100, -220, -20, width, 10, 120, 50, 3000, 8000, 12000);
}

//sprinkle falling elements
function fallingImg(maxVars, numTotal, y, x, spread, minRotate, maxRotate, minStartTime, maxStartTime, minTime, maxTime) {
	var variation, className, leftMargin, time, startTime = 0, rotateImg;
	for (var i=1; i <= numTotal; i++) {
		className = $objs[Math.floor(Math.random() * $objs.length)]; 
		variation = Math.floor((Math.random() * maxVars) + 1); //random CSS img
		leftMargin = Math.floor((Math.random() * spread) + x); //set left position
		time = Math.floor((Math.random() * (maxTime-minTime)) + minTime); //random fall duration
		rotateImg = Math.floor((Math.random() * (maxRotate-minRotate)) + minRotate);	//random rotation angle
		startTime = startTime + Math.floor((Math.random() * (maxStartTime-minStartTime)) + minStartTime);
		$element = $('<div class="fallingImg '+className+variation+'" style="top: '+y+'px; left: '+leftMargin+'px; background-size: cover;" />');
		$element.appendTo('.canvas');
		$element.delay(startTime).animate({ top: 500, rotateZ: rotateImg}, {
			duration: time,
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
		/*
		var i;
		if (y == 400){
			if((leftMargin < (cupPos + 50)) && (leftMargin > cupPosition)){
				console.log("success!");
				for (i = 0; i<$objs.length; i++){
					if(className == $objs[i]){
						if(variation == (correctNums[i] + 1)){
							$('.order').text('correct');
							$(this).remove();	//clean up the element
						}
						else
						{
							gameOver();
						}
					}
				}
			}
		}
		*/
	}
}
var i, bool = false;
$(document).on('click', '.fallingImg', function(){
// $objs+(correctRands+1)
	for (i=0; i<4; i++){
		let stringVar = "fallingImg " + $objs[i] + (correctNums[i]+1);
		console.log($(this).attr("class"));
		console.log(stringVar);
		if($(this).attr("class") == stringVar){
			console.log("correct!");
			bool = true;
		}
	}
	if (bool == false){
		gameOver();
	}
	else if (bool == true){
		bool = false;
	}
	$(this).remove();
  });

 function gameOver(){
	 $('.gameOver').animate({opacity: "1"});
}
