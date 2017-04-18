   AOS.init();

// $(window).scroll(function() {
//   if ($(this).scrollTop()> 100) {
//       $('.logo').css('opacity','.5').fadeOut('slow');
//   } else {
//       $('.logo').css('opacity','1').fadeIn('slow');
//   }
// });


// /* Every time the window is scrolled ... */
// $(window).scroll( function(){
//     /* Check the location of each desired element */
//     $('.fade').each( function(i){
//         var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
//         var bottom_of_window = $(window).scrollTop() + $(window).height();
//         /* If the object is completely visible in the window, fade it in */
//         if( bottom_of_window > bottom_of_object ){
//             $(this).animate({'opacity':'1'},400);
//         } else {
//             $(this).animate({'opacity':'0'},400);
//         }
//     });
// });


// $(window).scroll( function(){
//   var logo = $('.logo');
//     $('.fade').each( function(i){
//         var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 100;
//         var bottom_of_window = $(window).scrollTop() + $(window).height();
//         if( bottom_of_window > bottom_of_object ){
//             logo.css('opacity','0.25');
//             $(this).animate({'opacity':'1'},400);
//         }
//     });
// });
