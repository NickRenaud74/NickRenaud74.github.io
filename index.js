markupCont = document.querySelector('.markup-img-container');
elementCont = document.querySelector('.element-img-container');

markupHover = document.querySelector('.markup-img-hover');
elementHover = document.querySelector('.element-img-hover');


markupCont.addEventListener('mouseenter', e => {
    const style = markupHover.style
    style.animationName = 'show';
    style.animationDuration = '0.5s';
    style.animationFillMode = 'forwards';
});

markupCont.addEventListener('mouseleave', e => {
    const style = markupHover.style
    style.animationName = 'hide';
    style.animationDuration = '0.5s';
    style.animationFillMode = 'forwards';
})

elementCont.addEventListener('mouseenter', e => {
    const style = elementHover.style
    style.animationName = 'show';
    style.animationDuration = '0.5s';
    style.animationFillMode = 'forwards';
});

elementCont.addEventListener('mouseleave', e => {
    const style = elementHover.style
    style.animationName = 'hide';
    style.animationDuration = '0.5s';
    style.animationFillMode = 'forwards';
});