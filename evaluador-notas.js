// Archivo: evaluador-notas.js

// 1. Declarar la variable nota (Cámbiala para probar: 45, 60, 75, 0, 95)
let nota = 85; 

// 2. Verificar si la nota es válida (mayor a 0)
if (nota > 0) {
    
    // 3. Evaluar los rangos con if/else
    if (nota >= 90) {
        console.log("Tu nota es " + nota + ": Aprobado con Excelente");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Tu nota es " + nota + ": Aprobado con Bien");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Tu nota es " + nota + ": Aprobado con Suficiente");
    } else {
        // Menor a 60
        console.log("Tu nota es " + nota + ": El estudiante no aprueba");
    }

} else {
    // Si la nota es 0 o negativa
    console.log("La nota no es válida o es 0. Por favor revisa el valor.");
}