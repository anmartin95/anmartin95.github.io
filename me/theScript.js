// creates automatic slideshow of images that shift by 1 image every second
function imageGallery()
{
    var imgContainer1 = document.getElementById('imgDisplay1');
    var images1 = imgContainer1.getElementsByTagName('img');
    var imgContainer2 = document.getElementById('imgDisplay2');
    var images2 = imgContainer2.getElementsByTagName('img');
    var imgContainer3 = document.getElementById('imgDisplay3');
    var images3 = imgContainer3.getElementsByTagName('img');
    var i = 1;
    if (i < images3.length)
    {
        setInterval(function ()
        {
            images1[0].src = images1[i].src;
            images1[0].style.opacity = 1;
            images1[0].style.display = 'inline';

            images2[0].src = images2[i].src;
            images2[0].style.opacity = 1;
            images2[0].style.display = 'inline';

            images3[0].src = images3[i].src;
            images3[0].style.opacity = 1;
            images3[0].style.display = 'inline';

            i++;

            if(i === images3.length)
            {
                i = 1;
            }

        }, 1000);
    }
}

imageGallery();