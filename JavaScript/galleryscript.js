const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
};

const updateDot = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}


nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling
    const IndexSlide = slides.findIndex(slide => slide === currentSlide)


    if(IndexSlide === slides.length - 1) {
        moveToSlide(track, currentSlide, track.firstElementChild)
        updateDot(currentDot, dotsNav.firstElementChild)
    }else{
        moveToSlide(track, currentSlide, nextSlide)
        updateDot(currentDot, nextDot)
    }
});

prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling
    const IndexSlide = slides.findIndex(slide => slide === currentSlide)
    

    if(IndexSlide === 0) {
        moveToSlide(track, currentSlide, track.lastElementChild)
        updateDot(currentDot, dotsNav.lastElementChild)
    }else{
        moveToSlide(track, currentSlide, prevSlide)
        updateDot(currentDot, prevDot)
    }
});


dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide')
    const currentDot = dotsNav.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide)
    updateDot(currentDot, targetDot)
})




const track2 = document.querySelector('.track2');
const slides2 = Array.from(track2.children)
const nextButton2 = document.querySelector('.button2--right');
const prevButton2 = document.querySelector('.button2--left');
const dotsNav2 = document.querySelector('.nav2');
const dots2 = Array.from(dotsNav2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;

const setSlidePosition2 = (slide2,index) => {
    slide2.style.left = slideWidth2 * index + 'px';
};
slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
    track2.style.transform = 'translateX(-' + targetSlide2.style.left + ')';

    currentSlide2.classList.remove('current-slide2');
    targetSlide2.classList.add('current-slide2')
};

const updateDot2 = (currentDot2, targetDot2) => {
    currentDot2.classList.remove('current-slide2')
    targetDot2.classList.add('current-slide2')
}


nextButton2.addEventListener('click', e =>{
    const currentSlide2 = track2.querySelector('.current-slide2');
    const nextSlide2 = currentSlide2.nextElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current-slide2')
    const nextDot2 = currentDot2.nextElementSibling
    const IndexSlide2 = slides2.findIndex(slide2 => slide2 === currentSlide2)


    if(IndexSlide2 === slides2.length - 1) {
        moveToSlide2(track2, currentSlide2, track2.firstElementChild)
        updateDot2(currentDot2, dotsNav2.firstElementChild)
    }else{
        moveToSlide2(track2, currentSlide2, nextSlide2)
        updateDot2(currentDot2, nextDot2)
    }
});

prevButton2.addEventListener('click', e =>{
    const currentSlide2 = track2.querySelector('.current-slide2');
    const prevSlide2 = currentSlide2.previousElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current-slide2')
    const prevDot2 = currentDot2.previousElementSibling
    const IndexSlide2 = slides2.findIndex(slide2 => slide2 === currentSlide2)
    

    if(IndexSlide2 === 0) {
        moveToSlide(track2, currentSlide2, track.lastElementChild)
        updateDot(currentDot2, dotsNav2.lastElementChild)
    }else{
        moveToSlide(track2, currentSlide2, prevSlide2)
        updateDot(currentDot2, prevDot2)
    }
});


dotsNav2.addEventListener('click', e => {
    const targetDot2 = e.target.closest('button');

    if (!targetDot2) return;

    const currentSlide2 = track2.querySelector('.current-slide2')
    const currentDot2 = dotsNav2.querySelector('.current-slide2')
    const targetIndex2 = dots2.findIndex(dot2 => dot2 === targetDot2)
    const targetSlide2 = slides2[targetIndex2]

    moveToSlide(track2, currentSlide2, targetSlide2)
    updateDot(currentDot2, targetDot2)
})





