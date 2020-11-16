const milks = ["whole milk", "skim milk", "2% milk", "oat milk", "almond milk", "coconut milk", "soy milk", "no milk", "cream", "foam"];
const addIns = ["splenda", "sweet n low", "cinnamon", "sugar in the raw", "sugar", "no sugar"];
const syrups = ["caramel", "vanilla", "mocha", "hazelnut", "no syrup", "pumpkin spice", "white chocolate"];
const drinks = ["dark roast", "light roast", "medium roast", "americano", "espresso", "macchiato", "latte", "cold brew", "green tea", "black tea", "chai"];
const temp = ["hot", "iced", "light ice"];

function order(){
    const randMilk = milks[Math.floor(Math.random()* milks.length())];
    const randAddIn = addIns[Math.floor(Math.random()* addIns.length())];
    const randSyrup = syrups[Math.floor(Math.random()* syrups.length)];
    const randDrink = drinks[Math.floor(Math.random()* drinks.length)];
    const randTemp = temp[Math.floor(Math.random()* temp.length)];
    const order = randTemp + ", " + randDrink + ", with " + randMilk + ", " + randAddIn + ", and" + randSyrup;
    return order;
}
