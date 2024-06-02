// // slider jquery

// $(document).ready(function() {
//     let currentIndex = 0;
//     const slides = $('.slide');
//     const dots = $('.dot');
//     const totalSlides = slides.length;

//     function showSlide(index) {
//         $('.slider').css('transform', 'translateX(' + (-index * 370) + 'px)');
//         dots.removeClass('active');
//         dots.eq(index).addClass('active');
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         showSlide(currentIndex);
//     }

//     dots.click(function() {
//         currentIndex = $(this).data('index');
//         showSlide(currentIndex);
//     });

//     showSlide(currentIndex);
//     setInterval(nextSlide, 2000);
// });