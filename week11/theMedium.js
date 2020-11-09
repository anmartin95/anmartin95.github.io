console.log("js!");

let theButton = document.querySelector("button");
let theBody = document.querySelector("body");
let sites = ["https://www.ap.org/media-center/understanding-the-election", "https://www.nytimes.com/live/2020/11/04/us/election-results", "https://www.cnn.com/politics/live-news/election-results-and-news-11-04-20/index.html", "https://www.washingtonpost.com/elections/2020/11/04/trump-biden-election-live-updates/", "https://www.chicagotribune.com/election-2020/ct-2020-election-results-live-updates-20201103-6z4tvtixefbnbftyfibk25ho5y-story.html", "https://www.nbcnews.com/politics/2020-election/live-blog/2020-11-04-trump-biden-election-results-n1246346/ncrd1246444#liveBlogHeader"];
let colors = ["purple", "blue", "orange", "yellow", "green", "pink", "red", "white"]

theButton.addEventListener('click', theClick);

function theClick(){
    console.log("click for election updates");
    const randColor = colors[Math.floor(Math.random()*colors.length)];
    theBody.style.backgroundColor = randColor;
    const randSite = sites[Math.floor(Math.random()*sites.length)];
    location.href = randSite;
}
