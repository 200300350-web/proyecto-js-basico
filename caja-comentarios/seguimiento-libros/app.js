const inputTitulo = document.getElementById('input-titulo');
const inputComentario = document.getElementById('input-comentario');
const btnAgregar = document.getElementById('btn-agregar');
const listaComentarios = document.getElementById('lista-comentarios');

btnAgregar.addEventListener('click', function() {
    const tituloLibro = inputTitulo.value.trim();
    const textoComentario = inputComentario.value.trim();

    // Validamos que haya llenado los dos campos
    if (tituloLibro === "" || textoComentario === "") {
        alert("¡Por favor escribe el título del libro y tu comentario!");
        return; 
    }

    const nuevoElemento = document.createElement('div');
    nuevoElemento.classList.add('comentario'); 

    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleString(); 

    // Aquí insertamos el Título en negritas (<h3>) y luego el comentario
    nuevoElemento.innerHTML = `
        <h3>📖 ${tituloLibro}</h3>
        <p>${textoComentario}</p>
        <button class="btn-eliminar">Eliminar 🗑️</button>
        <span class="fecha">${fechaFormateada}</span>
    `;

    const botonEliminar = nuevoElemento.querySelector('.btn-eliminar');
    botonEliminar.addEventListener('click', function() {
        nuevoElemento.remove(); 
    });

    listaComentarios.appendChild(nuevoElemento);

    // Limpiamos ambos campos de texto
    inputTitulo.value = "";
    inputComentario.value = "";
});