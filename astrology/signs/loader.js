const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function loadingScreen()
{
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50);
    }, 3000); // in milliseconds - 'loads' for 3 seconds
}

loadingScreen();