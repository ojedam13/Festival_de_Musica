const { series, src, dest, watch } = require ('gulp');
var sass = require('gulp-sass')(require('sass'));

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

function watchArchivos(){
    watch('src/scss/**/*.scss', css); //* = la carpeta actual - ** = Todos los archivos con esa extension
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;