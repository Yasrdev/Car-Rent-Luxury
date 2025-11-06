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

    console.log(navbar.classList);
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


// Gestion de l'affichage de la card
document.addEventListener('DOMContentLoaded', function() {
    const mobileDropdown = document.querySelector('.custom-dropdown-mobile');
    const dropdownCard = document.querySelector('.custom-dropdown-card');
    
    mobileDropdown.addEventListener('click', function() {
        dropdownCard.classList.toggle('show-card');
        // Réinitialiser l'affichage des icônes quand la card s'ouvre
        if (dropdownCard.classList.contains('show-card')) {
            setTimeout(() => {
                forceIconsDisplay();
            }, 100);
        }
    });
    
    // Fermer la card en cliquant à l'extérieur
    document.addEventListener('click', function(event) {
        if (!mobileDropdown.contains(event.target) && !dropdownCard.contains(event.target)) {
            dropdownCard.classList.remove('show-card');
        }
    });
});

// Fonction pour forcer l'affichage de toutes les icônes
function forceIconsDisplay() {
    const dropdowns = document.querySelectorAll('.custom-dropdown-card .custom-dropdown');
    dropdowns.forEach(dropdown => {
        const options = dropdown.querySelectorAll('ul li');
        options.forEach(option => {
            const icon = option.querySelector('i');
            if (icon) {
                icon.style.display = 'inline-block';
                icon.style.opacity = '0.3'; // Icônes non sélectionnées en transparence
            }
        });
        
        // Première option en pleine opacité
        const firstOption = options[0];
        const firstIcon = firstOption.querySelector('i');
        if (firstIcon) {
            firstIcon.style.opacity = '1';
        }
    });
}

// Filter Custom Drop down
function initDropdown(dropdown) {
    const label = dropdown.querySelector('label');
    const options = dropdown.querySelectorAll('ul li');
    const checkbox = dropdown.querySelector('input');

    // Vérifier si le dropdown a des options
    if (options.length > 0 && label) {
        // S'assurer que toutes les icônes sont visibles
        options.forEach(option => {
            const icon = option.querySelector('i');
            if (icon) {
                icon.style.display = 'inline-block';
                icon.style.opacity = '0.3';
            }
        });

        // Sélection par défaut : première option
        const firstOption = options[0];
        const firstIcon = firstOption.querySelector('i');
        if (firstIcon) {
            firstIcon.style.opacity = '1';
        }
        label.textContent = firstOption.childNodes[0].textContent.trim();

        options.forEach(option => {
            option.addEventListener('click', () => {
                // Mettre à jour le label
                label.textContent = option.childNodes[0].textContent.trim();

                // Fermer le dropdown
                checkbox.checked = false;

                // Mettre à jour l'opacité des icônes
                options.forEach(opt => {
                    const optIcon = opt.querySelector('i');
                    if (optIcon) {
                        optIcon.style.opacity = '0.3';
                    }
                });
                
                // Icône sélectionnée en pleine opacité
                const selectedIcon = option.querySelector('i');
                if (selectedIcon) {
                    selectedIcon.style.opacity = '1';
                }
            });
        });
    }
}

// Initialiser tous les dropdowns
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.custom-dropdown').forEach(initDropdown);
    // Forcer l'affichage initial des icônes
    setTimeout(forceIconsDisplay, 500);
});

// Fermer les dropdowns si clic à l'extérieur
document.addEventListener('click', (event) => {
    document.querySelectorAll('.custom-dropdown input').forEach(input => {
        const dropdown = input.closest('.custom-dropdown');
        if (!dropdown.contains(event.target)) {
            input.checked = false;
        }
    });
});



// car details gellery 

// Gallery functionality
function initGallery() {
  const galleryImages = [
    {
      main: "/assets/images/car-1.png",
      thumb: "/assets/images/car-1.png"
    },
    {
      main: "/assets/images/car-1.png",
      thumb: "/assets/images/car-1.png"
    },
    {
      main: "/assets/images/car-1.png",
      thumb: "/assets/images/car-1.png"
    },
    {
      main: "/assets/images/car-1.png",
      thumb: "/assets/images/car-1.png"
    },
    {
      main: "/assets/images/car-1.png",
      thumb: "/assets/images/car-1.png"
    }
  ];
  
  let galleryCurrentIndex = 0;
  const galleryTotalImages = galleryImages.length;
  
  const galleryMainImage = document.getElementById('galleryMainImage');
  const galleryCurrentImageSpan = document.getElementById('galleryCurrentImage');
  const galleryTotalImagesSpan = document.getElementById('galleryTotalImages');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');
  const thumbSlides = document.querySelectorAll('.gallery-thumb-slide');
  
  // Initialiser le compteur
  galleryTotalImagesSpan.textContent = galleryTotalImages;
  updateGalleryCounter();
  
  // Initialiser Swiper pour les miniatures
  const galleryThumbnailSwiper = new Swiper('.gallery-thumbnail-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    centeredSlides: true,
    loop: false,
    pagination: {
      el: '.gallery-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  
  // Mettre à jour l'image principale et le swiper
  function updateGalleryMainImage(index) {
    galleryCurrentIndex = index;
    
    // Animation de fondu
    galleryMainImage.style.opacity = '0';
    
    setTimeout(() => {
      galleryMainImage.src = galleryImages[galleryCurrentIndex].main;
      galleryMainImage.style.opacity = '1';
      updateGalleryCounter();
      updateGalleryButtons();
      updateActiveThumb();
      
      // Mettre à jour le swiper
      galleryThumbnailSwiper.slideTo(galleryCurrentIndex);
    }, 200);
  }
  
  // Mettre à jour le compteur
  function updateGalleryCounter() {
    galleryCurrentImageSpan.textContent = galleryCurrentIndex + 1;
  }
  
  // Mettre à jour l'état des boutons
  function updateGalleryButtons() {
    galleryPrevBtn.classList.toggle('disabled', galleryCurrentIndex === 0);
    galleryNextBtn.classList.toggle('disabled', galleryCurrentIndex === galleryTotalImages - 1);
  }
  
  // Mettre à jour la miniature active
  function updateActiveThumb() {
    thumbSlides.forEach((slide, index) => {
      if (index === galleryCurrentIndex) {
        slide.classList.add('gallery-thumb-slide-active');
      } else {
        slide.classList.remove('gallery-thumb-slide-active');
      }
    });
  }
  
  // Événements pour les boutons de navigation
  galleryPrevBtn.addEventListener('click', function() {
    if (galleryCurrentIndex > 0) {
      updateGalleryMainImage(galleryCurrentIndex - 1);
    }
  });
  
  galleryNextBtn.addEventListener('click', function() {
    if (galleryCurrentIndex < galleryTotalImages - 1) {
      updateGalleryMainImage(galleryCurrentIndex + 1);
    }
  });
  
  // Mettre à jour l'image principale lorsqu'on clique sur une miniature
  thumbSlides.forEach((slide, index) => {
    slide.addEventListener('click', function() {
      updateGalleryMainImage(index);
    });
  });
  
  // Mettre à jour l'image principale lorsqu'on change de slide dans le swiper
  galleryThumbnailSwiper.on('slideChange', function() {
    const activeIndex = galleryThumbnailSwiper.activeIndex;
    updateGalleryMainImage(activeIndex);
  });
  
  // Initialisation
  updateGalleryButtons();
  updateActiveThumb();
}

// Appeler la fonction d'initialisation de la galerie
document.addEventListener('DOMContentLoaded', function() {
  // ... votre code existant ...
  
  // Initialiser la galerie si on est sur la page car-details
  if (document.querySelector('.gallery-page')) {
    initGallery();
  }
});