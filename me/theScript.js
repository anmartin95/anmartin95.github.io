// creates automatic slideshow of images that shift by 1 image every second
function imageGallery()
{
    var imgContainer1 = document.getElementById('imgDisplay1');
    var images1 = imgContainer1.getElementsByTagName('img');
    var imgContainer2 = document.getElementById('imgDisplay2');
    var images2 = imgContainer2.getElementsByTagName('img');
    var imgContainer3 = document.getElementById('imgDisplay3');
    var images3 = imgContainer3.getElementsByTagName('img');
    var imgContainer4 = document.getElementById('imgDisplay4');
    var images4 = imgContainer4.getElementsByTagName('img');
    var imgContainer5 = document.getElementById('imgDisplay5');
    var images5 = imgContainer5.getElementsByTagName('img');
    var i = 1;
    if (i < images5.length)
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

            images4[0].src = images4[i].src;
            images4[0].style.opacity = 1;
            images4[0].style.display = 'inline';

            images5[0].src = images5[i].src;
            images5[0].style.opacity = 1;
            images5[0].style.display = 'inline';

            i++;

            if(i === images5.length)
            {
                i = 1;
            }

        }, 2000);
    }
}

imageGallery();