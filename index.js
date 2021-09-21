'use strict'
let gallery = document.querySelector('.gallery');
gallery.addEventListener('click', (event) => {
    if(event.target.tagName == "IMG" && Boolean(document.querySelector('#openImg')) === false){
        let container = document.querySelector('.gallery__wrapper')
        container.insertAdjacentHTML('beforeend', `<img src=${event.target.getAttribute('src')} id="openImg" alt="photo" class="gallery__item-open">`);
    } else if (Boolean(document.querySelector('#openImg')) === false){
        return
    } else {
        document.querySelector('#openImg').remove()
    }
})

const anchors = document.querySelectorAll('a[href*="#"]');

for( let anchor of anchors){
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    })
}