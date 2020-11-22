// arrays of order options
const milks = ["whole milk", "skim milk", "2% milk", "oat milk", "almond milk", "coconut milk", "soy milk", "no milk", "cream", "foam"];
const addIns = ["splenda", "sweet n low", "cinnamon", "sugar", "no sugar"];
const syrups = ["caramel", "vanilla", "mocha", "hazelnut", "no", "pumpkin spice", "white chocolate"];
const drinks = ["dark roast", "light roast", "medium roast", "americano", "espresso", "macchiato", "latte", "cold brew", "green tea", "black tea", "chai"];
const temp = ["hot", "iced"];

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
