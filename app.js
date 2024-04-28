let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle("active")
}
window.onscroll= ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove("active")
}

document.querySelector("#search-icon").onclick = ()=>{
    document.querySelector("#search-form").classList.toggle("active");
}
document.querySelector("#close").onclick = ()=>{
    document.querySelector("#search-form").classList.remove("active");
}

// swiper \
const swiper = new Swiper('.home-slider', {
    spaceBetween: 150,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },
    // Optional parameters
 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    loop: true,
  
  
  });

  const swiper2 = new Swiper('.review-slider', {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});


const backToTopBtn = document.querySelector('.back-to-top');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
    // Calculate the total height of the document
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    
    // Calculate the scroll position as a percentage of the total height
    const scrollPercentage = (window.scrollY / totalHeight) * 100;

    // Check if the scroll percentage is greater than or equal to 40%
    if (scrollPercentage >= 40) {
        backToTopBtn.style.display = 'block'; // Show the button
    } else {
        backToTopBtn.style.display = 'none'; // Hide the button
    }
});