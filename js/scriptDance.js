/*Carga de imagenes SlinerIndex----------------------------------------------------------------------------------------------------------------------------------*/
const photoList = document.getElementById("photo__element");

for(let i=0; i<=11;i++){
    photoList.innerHTML += getPhotoElement (i+1);
}

function getPhotoElement(photo_id){
    return `<div class="slider__element"><img src="/imagen/Dance/PhotoSlider/Dance-${photo_id}.jpg" alt="IRENE" class="clickable">
    </div>`;
}

/*Grid Book ----------------------------------------------------------------------------------------------------------------------------------*/
const photoBook = document.getElementById("photo-book-grid");

for(let i =0;i<=11;i++){
    photoBook.innerHTML += getPhotoBook (i+1);
}

function getPhotoBook(photo_id){
    return `<div class="photo__elementGrid"><img src="/imagen/Dance/PhotoGrid/Dance-${photo_id}.jpg" alt="Fotos del book" class="photoB">
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

/*modo oscuro ----------------------------------------------------------------------------------------------------------------------------------
// Selecciona los botones y el body
const modoOscuroBoton = document.querySelector(".modo-oscuro");
const modoClaroBoton = document.querySelector(".modo-claro");
const body = document.body;

// Función para actualizar la visibilidad de los botones
function actualizarBotones() {
    if (body.classList.contains("modo-black-off")) {
        modoOscuroBoton.style.display = "inline-block";
        modoClaroBoton.style.display = "none";
    } else {
        modoOscuroBoton.style.display = "none";
        modoClaroBoton.style.display = "inline-block";
    }
}

// Función para cambiar el modo
function toggleModoOscuro() {
    body.classList.toggle("modo-black-off");
    body.classList.toggle("modo-black-on");
    actualizarBotones();
}

// Eventos de los botones
modoOscuroBoton.addEventListener("click", toggleModoOscuro);
modoClaroBoton.addEventListener("click", toggleModoOscuro);

// **Verificar el estado del modo al cargar la página**
document.addEventListener("DOMContentLoaded", actualizarBotones);*/


