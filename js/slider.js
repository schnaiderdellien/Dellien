window.addEventListener('load',function(){
    new Glider(document.querySelector('.slider__list'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.slider__indicadores',
        arrows: {
            prev: '.slider__anterior',
            next: '.slider__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
                breakpoint: 600,
                settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
              // screens greater than >= 1024px
                breakpoint: 900,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            }
        ]
        
    });
});