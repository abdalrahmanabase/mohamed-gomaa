<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="icon" href="{{ asset('ChatGPT_Image_Jun_20__2025__10_00_27_PM-removebg-preview.png') }}" type="image/x-icon">
    
    {{-- Preload critical background images --}}
    <link rel="preload" as="image" href="{{ asset('images/hijama.webp') }}">
    <link rel="preload" as="image" href="{{ asset('images/hijama-mobile2.webp') }}">
    <link rel="preload" as="image" href="{{ asset('images/hijama-home.webp') }}">
    <link rel="preload" as="image" href="{{ asset('images/الفوطة-النارية.jpg') }}">
    <link rel="preload" as="image" href="{{ asset('images/meso3.jpeg') }}">
    <link rel="preload" as="image" href="{{ asset('images/plasma2.jpg') }}">
    <link rel="preload" as="image" href="{{ asset('images/derma.webp') }}">
    <link rel="preload" as="image" href="{{ asset('images/phezecal.jpg') }}">
    <link rel="preload" as="image" href="{{ asset('images/herbs.jpg') }}">
    <link rel="preload" as="image" href="{{ asset('images/beess.jpg') }}">

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @vite('resources/css/app.css')
    @inertiaHead
    
    <style>
      /* Loading overlay styles */
      #image-preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease, visibility 0.5s ease;
      }
      
      #image-preloader.hidden {
        opacity: 0;
        visibility: hidden;
      }
      
      .loader {
        width: 50px;
        height: 50px;
        border: 4px solid #60A5FA;
        border-top: 4px solid #ffffff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  </head>
  <body>
    <div id="image-preloader">
      <div class="loader"></div>
    </div>
    
    @inertia
    
    <script>
      // Preload critical background images
      const criticalImages = [
        '/images/hijama.webp',
        '/images/hijama-mobile2.webp',
        '/images/hijama-home.webp',
        '/images/الفوطة-النارية.jpg',
        '/images/meso3.jpeg',
        '/images/plasma2.jpg',
        '/images/derma.webp',
        '/images/phezecal.jpg',
        '/images/herbs.jpg',
        '/images/beess.jpg',
        '/images/meso5.jpeg',
        '/images/plasma.jpg',
        '/images/phezecal-mobile.webp',
        '/images/herbs-mobile.jpg',
        '/images/1200x1200bf-60.jpg',
        '/images/hijama-mobile3.png',
        '/images/images.jpeg'
      ];
      
      let loadedImages = 0;
      const totalImages = criticalImages.length;
      const preloader = document.getElementById('image-preloader');
      
      function preloadImage(src) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedImages++;
            resolve();
          };
          img.onerror = () => {
            loadedImages++;
            resolve(); // Continue even if image fails
          };
          img.src = src;
        });
      }
      
      // Preload all images
      Promise.all(criticalImages.map(preloadImage)).then(() => {
        // Wait a bit more for CSS to apply
        setTimeout(() => {
          preloader.classList.add('hidden');
          // Remove from DOM after animation
          setTimeout(() => {
            preloader.remove();
          }, 500);
        }, 300);
      });
      
      // Fallback: Hide loader after 5 seconds max
      setTimeout(() => {
        if (preloader && !preloader.classList.contains('hidden')) {
          preloader.classList.add('hidden');
          setTimeout(() => preloader.remove(), 500);
        }
      }, 5000);
    </script>
  </body>
</html>