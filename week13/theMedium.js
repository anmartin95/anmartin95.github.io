
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
        var type = milks
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