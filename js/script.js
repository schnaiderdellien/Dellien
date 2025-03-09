/*Carga de imagenes SlinerIndex----------------------------------------------------------------------------------------------------------------------------------*/
const photoList = document.getElementById("photo__element");

for(let i=0; i<=25;i++){
    photoList.innerHTML += getPhotoElement (i+1);
}

function getPhotoElement(photo_id){
    return `<div class="slider__element"><img src="/imagen/SliderIndex/IRENE-${photo_id}.jpg" alt="IRENE" class="clickable">
    </div>`;
}

/*primera noticia Index ----------------------------------------------------------------------------------------------------------------------------------*/
const inforation1 = document.getElementById("information-1");


inforation1.innerHTML = getInformationElement1("information1")
function getInformationElement1(photo_id){
    return `<img src="/imagen/Information_1/${photo_id}.jpg" alt="Información 1"></div>`;
}
/*segunda noticia Index----------------------------------------------------------------------------------------------------------------------------------*/
const inforation2 = document.getElementById("information-2");


inforation2.innerHTML = getInformationElement2("information2")
function getInformationElement2(photo_id){
    return `<img src="/imagen/Information_1/${photo_id}.jpg" alt="Información 1"></div>`;
}

/*menú resposive ----------------------------------------------------------------------------------------------------------------------------------*/
const nav__menu = document.querySelector("#nav__menu");
const open__nav = document.querySelector("#open__nav");
const close__nav = document.querySelector("#close__nav");
const navLinks = document.querySelectorAll(".nav__list a");

open__nav.addEventListener("click",() =>{
    nav__menu.classList.add("visible");
})

close__nav.addEventListener("click",() =>{
    nav__menu.classList.remove("visible");
})

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        // Cerrar el menú
        nav__menu.classList.remove("visible");
    });
}

/*Lightbox ----------------------------------------------------------------------------------------------------------------------------------*/

/* Lightbox */
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".big_lightbox ");
const closeLightbox = document.querySelector(".close_lightbox");
const imgList = document.querySelectorAll(".slider__element");
const img = document.querySelectorAll(".clickable");

imgList.forEach((eachImg,index) => {
    imgList[index].addEventListener("click", ()=>{
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