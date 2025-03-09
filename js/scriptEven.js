/*Carga de imagenes SlinerIndex----------------------------------------------------------------------------------------------------------------------------------*/
const photoList = document.getElementById("photo__element");

for(let i=0; i<=39;i++){
    photoList.innerHTML += getPhotoElement (i+1);
}

function getPhotoElement(photo_id){
    return `<div class="slider__element"><img src="/imagen/Event/PhotoSlider/Event-${photo_id}.jpg" alt="IRENE" class="clickable">
    </div>`;
}

/*Grid Book ----------------------------------------------------------------------------------------------------------------------------------*/
const photoBook = document.getElementById("photo-book-grid");

for(let i =0;i<=39;i++){
    photoBook.innerHTML += getPhotoBook (i+1);
}

function getPhotoBook(photo_id){
    return `<div class="photo__elementGrid"><img src="/imagen/Event/PhotoGrid/Event-${photo_id}.jpg" alt="Fotos del book" class="photoB">
    </div>`;
}
/*menú resposive ----------------------------------------------------------------------------------------------------------------------------------*/
const nav__menu = document.querySelector("#nav__menu");
const open__nav = document.querySelector("#open__nav");
const close__nav = document.querySelector("#close__nav");

open__nav.addEventListener("click",() =>{
    nav__menu.classList.add("visible");
})

close__nav.addEventListener("click",() =>{
    nav__menu.classList.remove("visible");
})

/*Lightbox ----------------------------------------------------------------------------------------------------------------------------------*/

/* Lightbox */
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".big_lightbox ");
const closeLightbox = document.querySelector(".close_lightbox");
const imgList = document.querySelectorAll(".slider__element");
const gridList = document.querySelectorAll(".photo__elementGrid");
const img = document.querySelectorAll(".clickable");

imgList.forEach((eachImg,index) => {
    imgList[index].addEventListener("click", ()=>{
        lightbox.classList.add(`isActive`)
        lightboxImg.src = img[index].src
    });
});

gridList.forEach((eachImg,index) => {
    gridList[index].addEventListener("click", ()=>{
        lightbox.classList.add(`isActive`)
        lightboxImg.src = img[index].src
    });
});

// Cerrar la lightbox al hacer clic
closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("isActive");
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("isActive");
});