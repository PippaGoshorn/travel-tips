// E's attempt at trying to get an image to resize with a div.
// const elem = document.querySelector("#itinerary-div");
// if(elem) {
//   const rect = elem.getBoundingClientRect();
//   console.log(`height: ${rect.height}`);
//   var imageHeight = rect.height;
// }

// while dom
// document.querySelector("#itinerary-img").style.height = imageHeight+"px";

// window.addEventListener('DOMContentLoaded', () => {
//     const div = document.getElementById('itinerary-div');
//     const img = document.getElementById('itinerary-img');
    
//     function resizeImage() {
//       const divHeight = div.offsetHeight;
//       img.style.height = divHeight + 'px';
//     }
    
//     window.addEventListener('resize', resizeImage);
//     resizeImage(); // Initial resize
    
//     // You can also call resizeImage() when the content of the div changes
    
//   });

  // Swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });