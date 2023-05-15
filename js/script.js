let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderLine2 = document.querySelector('.slider-line-2');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 842;
    if (offset > 1600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 842;
    if (offset < 0) {
        offset = 1600;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-next-2').addEventListener('click', function () {
    offset = offset + 842;
    if (offset > 1600) {
        offset = 0;
    }
    sliderLine2.style.left = -offset + 'px';
});

document.querySelector('.slider-prev-2').addEventListener('click', function () {
    offset = offset - 842;
    if (offset < 0) {
        offset = 1600;
    }
    sliderLine2.style.left = -offset + 'px';
});

