const typewriter = new Typewriter('#typewriter', {
    loop: false,
    });

var message1 = "hidden messages";

typewriter.typeString('this page is scattered with ' + message1 + ' and riddles.')
    .start()
    .pauseFor(3000)
    .typeString(' answer them correctly to unlock new features and pages.')
    .pauseFor(10000)
    .deleteAll()
    .pauseFor(20000)
    .typeString('hint: look at the tab bar')
    .pauseFor(5000)
    .deleteAll();

function hover1()
{
    document.getElementById("typerwriter").style.color = "blue";
}
