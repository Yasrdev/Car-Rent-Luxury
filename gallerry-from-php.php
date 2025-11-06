<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galerie d'Article</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .gallery-page * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .gallery-page body {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        
        .gallery-container-main {
            max-width: 1200px;
            width: 100%;
            background: white;
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .gallery-content {
            padding: 40px;
            position: relative;
        }
        
        .gallery-main-image {
            position: relative;
            width: 100%;
            height: 500px;
            margin-bottom: 30px;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .gallery-image-display {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .gallery-counter {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .gallery-navigation {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            padding: 0 20px;
        }
        
        .gallery-nav-btn {
            background: rgba(255, 255, 255, 0.8);
            color: #4a6fa5;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            font-size: 1.2rem;
        }
        
        .gallery-nav-btn:hover {
            background: white;
            transform: scale(1.1);
        }
        
        .gallery-nav-btn.disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
        
        .gallery-thumbnail-container {
            position: relative;
            padding: 0 40px;
        }
        
        .gallery-thumbnail-swiper {
            height: 120px;
        }
        
        .gallery-thumb-slide {
            width: 150px;
            height: 100px;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            opacity: 0.6;
            transition: all 0.3s ease;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-thumb-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .gallery-thumb-slide-active {
            opacity: 1;
            border: 3px solid #4a6fa5;
            transform: scale(1.08);
        }
        
        .gallery-pagination {
            position: relative;
            margin-top: 25px;
        }
        
        .gallery-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #bdc3c7;
            opacity: 1;
            transition: all 0.3s ease;
        }
        
        .gallery-pagination-bullet-active {
            background: #4a6fa5;
            transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
            .gallery-content {
                padding: 20px;
            }
            
            .gallery-main-image {
                height: 300px;
            }
            
            .gallery-thumbnail-container {
                padding: 0 20px;
            }
            
            .gallery-nav-btn {
                width: 40px;
                height: 40px;
            }
        }
        
        @media (max-width: 576px) {
            .gallery-main-image {
                height: 250px;
            }
            
            .gallery-thumbnail-container {
                height: 100px;
            }
            
            .gallery-thumb-slide {
                width: 120px;
                height: 80px;
            }
            
            .gallery-navigation {
                padding: 0 10px;
            }
            
            .gallery-nav-btn {
                width: 35px;
                height: 35px;
                font-size: 1rem;
            }
        }
    </style>
</head>
<body class="gallery-page">
    <div class="gallery-container-main">
        <div class="gallery-content">
            <div class="gallery-main-image">
                <img id="galleryMainImage" class="gallery-image-display" src="<?php echo htmlspecialchars($carImages[0]['main']); ?>" alt="<?php echo htmlspecialchars($carImages[0]['alt']); ?>">
                <div class="gallery-counter">
                    <span id="galleryCurrentImage">1</span> / <span id="galleryTotalImages"><?php echo count($carImages); ?></span>
                </div>
                
                <div class="gallery-navigation">
                    <div id="galleryPrevBtn" class="gallery-nav-btn disabled">
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div id="galleryNextBtn" class="gallery-nav-btn">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
            
            <div class="gallery-thumbnail-container">
                <div class="swiper gallery-thumbnail-swiper">
                    <div class="swiper-wrapper">
                        <?php foreach ($carImages as $index => $image): ?>
                        <div class="swiper-slide gallery-thumb-slide" 
                             data-image="<?php echo htmlspecialchars($image['main']); ?>" 
                             data-index="<?php echo $index + 1; ?>">
                            <img src="<?php echo htmlspecialchars($image['thumb']); ?>" 
                                 alt="<?php echo htmlspecialchars($image['alt']); ?>">
                        </div>
                        <?php endforeach; ?>
                    </div>
                    
                    <div class="swiper-pagination gallery-pagination"></div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Données PHP converties en JavaScript
            const galleryImages = [
                <?php foreach ($carImages as $image): ?>
                {
                    main: "<?php echo $image['main']; ?>",
                    thumb: "<?php echo $image['thumb']; ?>",
                    alt: "<?php echo $image['alt']; ?>"
                },
                <?php endforeach; ?>
            ];
            
            let galleryCurrentIndex = 0;
            const galleryTotalImages = galleryImages.length;
            
            const galleryMainImage = document.getElementById('galleryMainImage');
            const galleryCurrentImageSpan = document.getElementById('galleryCurrentImage');
            const galleryTotalImagesSpan = document.getElementById('galleryTotalImages');
            const galleryPrevBtn = document.getElementById('galleryPrevBtn');
            const galleryNextBtn = document.getElementById('galleryNextBtn');
            
            // Initialiser le compteur
            galleryTotalImagesSpan.textContent = galleryTotalImages;
            updateGalleryCounter();
            
            // Initialiser Swiper
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
                galleryMainImage.src = galleryImages[galleryCurrentIndex].main;
                galleryMainImage.alt = galleryImages[galleryCurrentIndex].alt;
                updateGalleryCounter();
                updateGalleryButtons();
                
                // Mettre à jour le swiper
                galleryThumbnailSwiper.slideTo(galleryCurrentIndex);
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
            galleryThumbnailSwiper.on('click', function() {
                updateGalleryMainImage(galleryThumbnailSwiper.activeIndex);
            });
            
            // Mettre à jour l'image principale lorsqu'on change de slide
            galleryThumbnailSwiper.on('slideChange', function() {
                updateGalleryMainImage(galleryThumbnailSwiper.activeIndex);
            });
        });
    </script>
</body>
</html>


<?php
// Si vous avez simplement un tableau d'URLs d'images
$carImageUrls = [
    $car['image_url'],
    $car['image_url_2'],
    $car['image_url_3'],
    // etc.
];

$carImages = [];
foreach ($carImageUrls as $index => $url) {
    if (!empty($url)) {
        $carImages[] = [
            'main' => htmlspecialchars($url),
            'thumb' => htmlspecialchars($url),
            'alt' => htmlspecialchars($car['marque'] . ' ' . $car['modele'] . ' - Image ' . ($index + 1))
        ];
    }
}
?>