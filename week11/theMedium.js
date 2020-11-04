console.log("js!");

let theButton = document.querySelector("button");
let sites = ["https://www.ap.org/media-center/understanding-the-election", "https://www.nytimes.com/live/2020/11/04/us/election-results", "https://www.cnn.com/politics/live-news/election-results-and-news-11-04-20/index.html", "https://www.washingtonpost.com/elections/2020/11/04/trump-biden-election-live-updates/", "https://www.chicagotribune.com/election-2020/ct-2020-election-results-live-updates-20201103-6z4tvtixefbnbftyfibk25ho5y-story.html"];
// triggering an event with a callback function

theButton.addEventListener('click', theClick);

function theClick(){
    console.log("click for election updates");
    const randSite = sites[Math.floor(Math.random()*sites.length)];
    location.href(randSite);
}
