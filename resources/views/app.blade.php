<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
<link rel="icon" href="{{ asset('ChatGPT_Image_Jun_20__2025__10_00_27_PM-removebg-preview.png') }}" type="image/x-icon">

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @vite('resources/css/app.css')
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>