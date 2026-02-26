const inputComentario = document.getElementById('input-comentario');
const btnAgregar = document.getElementById('btn-agregar');
const listaComentarios = document.getElementById('lista-comentarios');

btnAgregar.addEventListener('click', function() {
    // 1. Obtenemos el texto y verificamos que no esté vacío
    const textoDelCliente = inputComentario.value.trim();

    if (textoDelCliente === "") {
        alert("¡Escribe un comentario antes de publicar!");
        return; 
    }

    // 2. Creamos un nuevo "div" para el comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario'); 

    // 3. Sacamos la fecha y hora actual
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleString(); 

    // 4. Armamos el contenido del comentario con HTML
    nuevoComentario.innerHTML = `
        <p>${textoDelCliente}</p>
        <button class="btn-eliminar">Eliminar 🗑️</button>
        <span class="fecha">${fechaFormateada}</span>
    `;

    // 5. Le damos vida al botón de eliminar de ESTE comentario en específico
    const botonEliminar = nuevoComentario.querySelector('.btn-eliminar');
    botonEliminar.addEventListener('click', function() {
        nuevoComentario.remove(); // Borra el elemento de la pantalla
    });

    // 6. Agregamos el comentario a la lista principal (lo servimos)
    listaComentarios.appendChild(nuevoComentario);

    // 7. Limpiamos la caja de texto
    inputComentario.value = "";
});