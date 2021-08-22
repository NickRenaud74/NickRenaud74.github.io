const markupCont = document.querySelector('.markup-img-container');
const elementCont = document.querySelector('.element-img-container');

const markupHover = document.querySelector('.markup-img-hover');
const elementHover = document.querySelector('.element-img-hover');


function animation(div, action) {
    const style = div.style;
    style.animationName = action;
    style.animationDuration = '0.5s';
    style.animationFillMode = 'forwards';
}

markupCont.addEventListener('mouseenter', e => {
    animation(markupHover, 'show');
});

markupCont.addEventListener('mouseleave', e => {
    animation(markupHover, 'hide');
})

elementCont.addEventListener('mouseenter', e => {
    animation(elementHover, 'show');
});

elementCont.addEventListener('mouseleave', e => {
    animation(elementHover, 'hide');
});