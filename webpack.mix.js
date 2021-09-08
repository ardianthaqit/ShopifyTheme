let mix = require('laravel-mix')

mix.copy('tailwind.config.js', 'shopify/assets/tailwind.config.js')
mix.copy('webpack.mix.js', 'shopify/assets/webpack.mix.js')

mix.styles(
    [
        'dist/css/application.css'
    ],
    'shopify/assets/solution25.css'
)
mix.scripts([
    "node_modules/swiper/swiper-bundle.min.js",
    "node_modules/alpinejs/dist/cdn.min.js",
    'dist/js/writehere.js'
  ], "shopify/assets/main.js")