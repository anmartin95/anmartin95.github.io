const typewriter2 = new Typewriter('#typewriter2', {
    loop: false,
    });

typewriter2.typeString('what fun is a dull and grey site?')
    .start()
    .pauseFor(1000)
    .typeString(' guess my favorite color to bring it to life.');


const typewriter3 = new Typewriter('#typewriter3',{
    loop: false,
    });
typewriter3.pauseFor(15000)
    .start()
    .typeString('it’s the ocean’s blue plus blood’s hue,')
    .pauseFor(1000)
    .typeString(' the prince of pop’s weather, too.');



$('#guessColor').submit(function colorRiddle(){
        const color = document.getElementById("cname").value;
        if (color == "purple")
        {
            document.getElementById("guessColor").action = "page1inColor.html";
        }
        else
        {
            alert("the answer your looking for may be found at the UPPER Left corner");
        }
    });
