/* Proyecto: Seguimiento de Libros
  Objetivo: Practicar el uso de funciones y arrays.
*/

// 1. Definimos el array vacío para almacenar los libros.
// Debe estar fuera de las funciones (scope global) para que ambas puedan acceder a él.
let librosLeidos = [];

// 2. Función para agregar un libro al array
function agregarLibro(titulo) {
    // Usamos el método .push() para añadir el título al final del array
    librosLeidos.push(titulo);
    console.log(`Libro agregado: "${titulo}"`); // Mensaje de confirmación
}

// 3. Función para mostrar todos los libros guardados
function mostrarLibrosLeidos() {
    // Validamos si el array está vacío
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("--- Lista de Libros Leídos ---");
        // Recorremos el array para imprimir cada libro
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log((i + 1) + ". " + librosLeidos[i]);
        }
    }
}

// --- PRUEBAS DEL CÓDIGO ---
// Llamamos a las funciones para verificar que todo funcione

agregarLibro("El Principito");
agregarLibro("Cien Años de Soledad");
agregarLibro("1984");

// Finalmente, mostramos la lista completa
mostrarLibrosLeidos();