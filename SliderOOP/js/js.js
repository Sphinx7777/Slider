var prevButton = document.getElementById('showPrevBtn');
var nextButton = document.getElementById('showNextBtn');
var imageSlider = document.getElementById('imageSlider');
var arreyImages = [];

prevButton.addEventListener('click', onPrevBtnClick);
nextButton.addEventListener('click', onNextBtnClick);

arreyImages.push('image/arhip.jpg');
arreyImages.push('image/globus.gif');
arreyImages.push('image/okean.jpg');
arreyImages.push('image/oblaka.jpg');
arreyImages.push('image/shtorm.jpg');

carrentImage = 0;
prevButton.disabled = true;

imageSlider.src = arreyImages[carrentImage];


function onPrevBtnClick() {
    carrentImage--;
    imageSlider.src = arreyImages[carrentImage];
    nextButton.disabled = false;

    if (carrentImage === 0) {
        prevButton.disabled = true;
    }
}
function onNextBtnClick() {
    carrentImage++;
    imageSlider.src = arreyImages[carrentImage];
    prevButton.disabled = false;

    if (carrentImage === arreyImages.length-1) {
        nextButton.disabled = true;
    }
}