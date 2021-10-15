document.addEventListener('DOMContentLoaded', function () {
    scrollNav();
});

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function (enlace) {
        enlaces.addEventListener('click', function (e) {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++){
        const imagen = document.createElement('img');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //añadir funcion mostraImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('li');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    //generar imagen
    const imagen = document.createElement('IMG')
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //boton cerrar img
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);
    //click afuera imagen se cierra
    overlay.onclick = function () {
        overlay.remove();
    }
    //cerrar imagen con la x
    cerrarImagen.onclick = function () {
        overlay.remove();
    }

    //mostrar en el html
    const body = document.querySelector('body')
    body.appendChild(overlay);
    // body.classList.add('fijar-body');
}