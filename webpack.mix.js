const cssImport = require('postcss-import')
const cssNesting = require('postcss-nesting')
const mix = require('laravel-mix')
const path = require('path')
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwindcss = require('tailwindcss')
    //const tailwindcssFront = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
mix.js('resources/js/front.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css/app.css')
    .postCss('resources/css/front/app.css', 'public/css/front/style.css', tailwindcss('./tailwind-front.config.js'))
    .options({
        postCss: [
            cssImport(),
            cssNesting(),
            tailwindcss,
            //tailwindcssFront,
            ...mix.inProduction() ? [
                purgecss({
                    content: ['./resources/views/**/*.blade.php', './resources/js/**/*.vue'],
                    defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || [],
                    whitelistPatternsChildren: [/nprogress/],
                }),
            ] : [],
        ],
    })
    .webpackConfig({
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js',
                '@': path.resolve('resources/js'),
            },
        },
    })
    .version()