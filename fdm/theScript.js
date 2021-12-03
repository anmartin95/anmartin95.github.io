const loading = document.querySelector('.loadingPage');
const main = document.querySelector('.main');

function loadingScreen()
{
    setTimeout(() => {
        loading.style.opacity = 0;
        loading.style.display = 'none';
        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50);
    }, 3000); // in milliseconds - 'loads' for 7 seconds
}

loadingScreen();