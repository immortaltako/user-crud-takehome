const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .vue({ version: 3 })
   .postCss('resources/css/app.css', 'public/css', [
       require('postcss-import'),
       require('tailwindcss'),
   ]);

// This uses module.exports, typical for CommonJS
module.exports = mix;