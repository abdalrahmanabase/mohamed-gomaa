<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    
    {{-- Basic SEO Meta Tags --}}
    @php
        $appName = config('app.name', 'مركز ابن القيم للحجامة والطب البديل');
        $appUrl = rtrim(config('app.url', url('/')), '/');
        // Ensure logo URL is absolute for Google (asset() returns absolute URL if APP_URL is set)
        $logoUrl = asset('ChatGPT_Image_Jun_20__2025__10_00_27_PM-removebg-preview.png');
        $currentUrl = url()->current();
        $description = 'مركز متخصص في الطب البديل والعلاج الطبيعي. نقدم خدمات الحجامة، سُم النحل، العلاج الطبيعي، البلازما، العلاج بالأعشاب، الفوطة النارية، والديرما بن.';
        $keywords = 'حجامة، طب بديل، علاج طبيعي، سُم النحل، بلازما، أعشاب، فوطة نارية، ديرما بن، مركز ابن القيم، الطب البديل في مصر';
        $socialLinks = [
            'https://www.facebook.com/share/19FYnSEW46',
            // Add more social links here as needed
            // 'https://instagram.com/yourpage',
            // 'https://twitter.com/yourpage',
        ];
    @endphp
    
    <title>{{ $appName }} – مركز متخصص في الطب البديل والعلاج الطبيعي</title>
    <meta name="description" content="{{ $description }}">
    <meta name="keywords" content="{{ $keywords }}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{{ $currentUrl }}">
    
    {{-- Open Graph / Facebook --}}
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ $currentUrl }}">
    <meta property="og:title" content="{{ $appName }}">
    <meta property="og:description" content="{{ $description }}">
    <meta property="og:image" content="{{ $logoUrl }}">
    <meta property="og:locale" content="ar_EG">
    
    {{-- Twitter Card --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $appName }}">
    <meta name="twitter:description" content="{{ $description }}">
    <meta name="twitter:image" content="{{ $logoUrl }}">
    
    {{-- Favicon and Icons --}}
    <link rel="icon" href="{{ asset('ChatGPT_Image_Jun_20__2025__10_00_27_PM-removebg-preview.png') }}" type="image/png">
    <link rel="apple-touch-icon" href="{{ asset('ChatGPT_Image_Jun_20__2025__10_00_27_PM-removebg-preview.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <meta name="theme-color" content="#2d5016">
    
    {{-- Structured Data for Organization --}}
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "{{ $appName }}",
      "url": "{{ $appUrl }}",
      "logo": "{{ $logoUrl }}",
      "description": "{{ $description }}",
      "sameAs": [
        @foreach($socialLinks as $index => $link)
        "{{ $link }}"@if($index < count($socialLinks) - 1),@endif
        @endforeach
      ]
    }
    </script>
    
    {{-- Structured Data for Website --}}
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "{{ $appUrl }}",
      "name": "{{ $appName }}",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "{{ $appUrl }}/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
    </script>
    
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    
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