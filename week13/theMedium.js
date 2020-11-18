const milks = ["whole milk", "skim milk", "2% milk", "oat milk", "almond milk", "coconut milk", "soy milk", "no milk", "cream", "foam"];
const addIns = ["splenda", "sweet n low", "cinnamon", "sugar", "no sugar"];
const syrups = ["caramel", "vanilla", "mocha", "hazelnut", "no", "pumpkin spice", "white chocolate"];
const drinks = ["dark roast", "light roast", "medium roast", "americano", "espresso", "macchiato", "latte", "cold brew", "green tea", "black tea", "chai"];
const temp = ["hot", "iced"];

// function to generate new coffee order each game
function randOrder(){
    const randMilk = milks[Math.floor(Math.random()* milks.length)];
    const randAddIn = addIns[Math.floor(Math.random()* addIns.length)];
    const randSyrup = syrups[Math.floor(Math.random()* syrups.length)];
    const randDrink = drinks[Math.floor(Math.random()* drinks.length)];
    const randTemp = temp[Math.floor(Math.random()* temp.length)];
    const order = randTemp + " " + randDrink + " with " + randMilk + ", " + randAddIn + ", and " + randSyrup + " syrup";
    console.log(order);
}

var myfallingObject;
var myCup;
var myScore;
var myOrder;

function startGame() {
    myOrder = randOrder();
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

// using each() function to iterate through divs and push id of each div into array $objs
var $objs = [];
$('div').each(function(){
    var id = $(this).attr('id');
    $objs.push(id);
});
console.log($objs);

// selecting random id of divs and storing it in newObj
function randObj(){
    const newObj = $objs[Math.floor(Math.random()* $objs.length)];
    //storing randomly selected img in url string
    var img = "images/" + newObj + ".jpg";
    return img;
}
var temporary = randObj();
function generateNew(){
    // generating new object every 3 seconds
    setInterval(function(){
        myfallingObject = new newImg(20, 30, temporary, 10, 120, "image");
        }, 3000);
}
function newImg (width, height, image, x, y, type){
    this.type = type;
    if (type == "image"){
        this.image = new Image();
        this.image.src = image;
    }
    this.width = width;
    this.height = height;
    this.speed = 1;
    this.x = x;
    this.y = y;
    
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            }
    
        }
}

function updateGameArea() {
    myfallingObject.generateNew();
}



