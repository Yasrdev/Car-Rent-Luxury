// == SWIPER EVENT == //
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    
  });

  //== Effet du bordure pour le menu ==//
  const navbar = document.querySelector('.navbar');
  const logo = document.getElementById('logo')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { // si on a scrollé de plus de 50px
        navbar.classList.add('active');
        logo.classList.add('active');
      } else {
        navbar.classList.remove('active');
        logo.classList.remove('active');
      }
    });


//== afficher le menu en Mobile ==//
const burger = document.getElementById('burger');
const fullscreenMenu = document.getElementById('fullscreenMenu');

burger.addEventListener('click', () => {
    fullscreenMenu.classList.toggle('active');
   if (fullscreenMenu.classList.contains('active')) {
    burger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    burger.innerHTML = '<i class="fas fa-bars"></i>';
  }
});


//== Loader au démarrage de la page ==//
 const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Masquer le loader après quelques secondes
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 1s ease";
      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
        document.body.style.overflow = "auto";
      }, 1000);
    }, 3500);




// Filter Custom Drop down
// Change option selected
const label = document.querySelector('.dropdown__filter-selected')
const options = Array.from(document.querySelectorAll('.dropdown__select-option'))

options.forEach((option) => {
	option.addEventListener('click', () => {
		label.textContent = option.textContent
	})
})








    





