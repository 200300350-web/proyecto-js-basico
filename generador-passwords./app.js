// 1. Seleccionar los elementos del HTML
const displayPassword = document.getElementById('password-display');
const btnGenerar = document.getElementById('btn-generar');
const btnCopiar = document.getElementById('btn-copiar');
const sliderLongitud = document.getElementById('slider-longitud');
const valorLongitud = document.getElementById('valor-longitud');

// Seleccionamos los checkboxes (nuestros ingredientes opcionales)
const chkMayusculas = document.getElementById('chk-mayusculas');
const chkMinusculas = document.getElementById('chk-minusculas');
const chkNumeros = document.getElementById('chk-numeros');
const chkSimbolos = document.getElementById('chk-simbolos');

// 2. Definir los grupos de ingredientes
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+~|}{[]:;?><,./-=";

// 3. Función para actualizar el número del slider en tiempo real
sliderLongitud.addEventListener('input', function() {
    valorLongitud.textContent = sliderLongitud.value;
});

// 4. La Receta Principal: Generar Contraseña
function generarPassword() {
    let ingredientesPermitidos = "";
    let passwordFinal = "";
    
    // Verificamos qué casillas están marcadas usando la propiedad .checked (true/false)
    if (chkMayusculas.checked) {
        ingredientesPermitidos += letrasMayusculas;
    }
    if (chkMinusculas.checked) {
        ingredientesPermitidos += letrasMinusculas;
    }
    if (chkNumeros.checked) {
        ingredientesPermitidos += numeros;
    }
    if (chkSimbolos.checked) {
        ingredientesPermitidos += simbolos;
    }

    // Validación: Si el usuario desmarcó todo, le avisamos
    if (ingredientesPermitidos === "") {
        displayPassword.textContent = "¡Elige una opción!";
        return; // Detenemos la función aquí
    }

    // Leemos el tamaño de porción que quiere el cliente
    let longitud = sliderLongitud.value;

    // Ciclo FOR: Bate la mezcla y saca letras al azar
    for (let i = 0; i < longitud; i++) {
        let indiceAleatorio = Math.floor(Math.random() * ingredientesPermitidos.length);
        passwordFinal += ingredientesPermitidos[indiceAleatorio];
    }

    // Servimos en la pantalla
    displayPassword.textContent = passwordFinal;
}

// 5. Función extra: Copiar al portapapeles ("Para llevar")
btnCopiar.addEventListener('click', function() {
    // navigator.clipboard es una herramienta moderna de JS para copiar texto
    let textoACopiar = displayPassword.textContent;
    if (textoACopiar !== "P4$5W0rD!" && textoACopiar !== "¡Elige una opción!") {
        navigator.clipboard.writeText(textoACopiar);
        alert("¡Contraseña copiada al portapapeles!");
    }
});

// 6. Escuchar el clic del botón principal
btnGenerar.addEventListener('click', generarPassword);