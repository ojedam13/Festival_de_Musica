const { series, src, dest, watch, parallel } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');

// Funcion que compila SaSs
function css(  ) {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css') )
}

function minificarcss(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css') )
}

function imagenes() {
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe( notify({message: 'Imagen Minificada'}))
}

function watchArchivos(){
    watch('src/scss/**/*.scss', css); //* = la carpeta actual - ** = Todos los archivos con esa extension
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series( css, imagenes, watchArchivos);