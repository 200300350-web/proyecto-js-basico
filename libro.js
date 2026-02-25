// Definimos nuestro objeto 'libro'
const libro = {
    // 1. Propiedades básicas
    titulo: "Como agua para chocolate",
    autor: "Laura Esquivel",
    anio: 1989,
    estado: "disponible",
    
    // Propiedad opcional: un array para guardar los capítulos
    capitulos: [],

    // 2. Método para describir el libro
    describirLibro: function() {
        // Usamos 'this' para referirnos a las propiedades de ESTE objeto
        console.log(`Libro titulado '${this.titulo}', escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    // 3. Métodos opcionales para los capítulos
    agregarCapitulo: function(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo); // Usamos push() que aprendiste antes
        console.log(`Se agregó el capítulo: "${nombreCapitulo}"`);
    },

    eliminarCapitulo: function() {
        if (this.capitulos.length > 0) {
            let eliminado = this.capitulos.pop(); // Usamos pop() para quitar el último
            console.log(`Se eliminó el capítulo: "${eliminado}"`);
        } else {
            console.log("No hay capítulos para eliminar.");
        }
    }
};

// --- PRUEBAS DEL CÓDIGO ---

// Imprimimos la descripción básica
libro.describirLibro();

// Agregamos algunos capítulos (que en este libro son recetas)
libro.agregarCapitulo("Enero: Tortas de Navidad");
libro.agregarCapitulo("Febrero: Pastel Chabela");

// Vemos cómo quedó nuestro array de capítulos
console.log("Capítulos actuales:", libro.capitulos);

// Eliminamos el último capítulo
libro.eliminarCapitulo();
console.log("Capítulos después de eliminar:", libro.capitulos);