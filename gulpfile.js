const { series, src, dest, watch, parallel } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades css
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

// utilidades js
const terser = require('gulp-terser-js');

// Funcion que compila SaSs
function css(  ) {
    return src('src/scss/app.scss')
        .pipe ( sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe( sourcemaps.write('.'))
        .pipe(dest('./build/css') )
}

function javascript() {
    return src('src/js/**/*.js')
        .pipe( sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe( sourcemaps.write('.'))
        .pipe( dest('./build/js'))
}

function imagenes() {
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe( notify({message: 'Imagen Minificada'}))
}

function versionWebp() {
    return src('src/img/**/*')
        .pipe(webp())
        .pipe(dest('./build/img'))
     .pipe( notify({message: 'Verson webp lista'}))
}

function watchArchivos(){
    watch('src/scss/**/*.scss', css); //* = la carpeta actual - ** = Todos los archivos con esa extension
    watch('src/js/**/*.js', javascript);
}

exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, javascript, imagenes, versionWebp, watchArchivos);