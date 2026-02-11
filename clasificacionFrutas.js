// 1. Declarar un arreglo con varios tipos de frutas (repetidas para probar el conteo)
const frutas = ['manzana', 'pera', 'manzana', 'naranja', 'manzana', 'pera', 'uva'];

// 2. Crear un objeto para almacenar la cantidad de cada tipo
const conteoFrutas = {};

// 3. Usar un ciclo for para recorrer el arreglo
for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];

    // Verificar si la fruta ya existe en el objeto
    if (conteoFrutas[frutaActual]) {
        // Si existe, le sumamos 1 al contador
        conteoFrutas[frutaActual]++; 
    } else {
        // Si no existe, la inicializamos en 1
        conteoFrutas[frutaActual] = 1;
    }
}

// 4. Imprimir en la consola el resultado final
console.log("Conteo de frutas (usando for):", conteoFrutas);