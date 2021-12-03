const container = document.querySelector('div');
let images = ["xmas.png", "duane.jpg", "jackets.png", "leaves.png", "puppy.jpg"];

function imageGallery()
{
    //loop through images array 
            // create image elements and set src
            var img = document.createElement("img");
            img.src = "images/" + images[i];
            var src1 = document.getElementById("imgDisplay");
            src1.appendChild(img);
            img.style.width = 150;
            img.style.height = 200;
    }

imageGallery();