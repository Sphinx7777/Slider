var slider1 = {
    carrentImage: 0,
    prevButton: document.getElementById('showPrevBtn'),
    nextButton: document.getElementById('showNextBtn'),
    imageSlider: document.getElementById('imageSlider'),
    arreyImages: [],
    startSlider: function () {
        var that = this;
        this.prevButton.addEventListener('click', function(e) {
            that.onPrevBtnClick(e);
        });
        this.nextButton.addEventListener('click', function(e) {
            that.onNextBtnClick(e);
        });

        this.arreyImages.push('image/arhip.jpg');
        this.arreyImages.push('image/globus.gif');
        this.arreyImages.push('image/okean.jpg');
        this.arreyImages.push('image/oblaka.jpg');
        this.arreyImages.push('image/shtorm.jpg');

        this.prevButton.disabled = true;

        this.imageSlider.src = this.arreyImages[this.carrentImage];
    },
    onPrevBtnClick: function (e) {
        this.carrentImage--;
        this.imageSlider.src = this.arreyImages[this.carrentImage];
        this.nextButton.disabled = false;

        if (this.carrentImage === 0) {
            this.prevButton.disabled = true;
        }
    },
    onNextBtnClick: function (e) {
        this.carrentImage++;
        this.imageSlider.src = this.arreyImages[this.carrentImage];
        this.prevButton.disabled = false;

        if (this.carrentImage === this.arreyImages.length - 1) {
            this.nextButton.disabled = true;
        }
    }
}