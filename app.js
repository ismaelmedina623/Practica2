
//declaraciones de variables
const estudiantes = [
  { id: 1, nombre: "Ana Lopez",    nota: 90 },
  { id: 2, nombre: "Carlos Ruiz",  nota: 55 },
  { id: 3, nombre: "Maria Torres", nota: 78 },
  { id: 4, nombre: "Luis Mendez",  nota: 45 },
  { id: 5, nombre: "Sofia Rios",   nota: 88 },
  { id: 6, nombre: "Pedro Soto",   nota: 62 },
];

// Un estudiante Solito

const estudianteX = {
    id: 7,
    nombre: "Lucia Gomez",
    nota: 95
}

// Referencias a DOM
const seccionEstudiantes = document.getElementById("lista-estudiantes")

const btnTodos = document.getElementById("btn-todos");
const btnAprobados = document.getElementById("btn-aprobados");
const btnReprobados = document.getElementById("btn-reprobados");
const btnPromedios = document.getElementById("btn-promedios");

// Funciones
const crearTarjeta = (unEstudiante) => {
    const estado = unEstudiante.nota > 60 ? "aprobado" : "Reprobado"
    const clase = unEstudiante.nota > 60 ? "aprobado" : "reprobado"

    const tarjera = `
    <div class="tarjeta ${clase}">
        <h2>${unEstudiante.nombre}</h2>
        <p>Nota: ${unEstudiante.nota}</p>
        <p>${estado}</p>
    
    </div>
    `;
    return tarjera;
}
const renderizarLista = (estudiantesApintar) => {
    const listaTarjetas = estudiantesApintar.map (
        (unEstudiante) => {
            const tarjeta = crearTarjeta(unEstudiante);
            return tarjeta;

        }
    )

    seccionEstudiantes.innerHTML = listaTarjetas.join("");
    


}
// Eventos 
btnTodos.addEventListener("click",
    () => {
        renderizarLista(estudiantes);
    }
);

btnAprobados.addEventListener("click",
    () => {
        const aprobados = estudiantes.filter(
            (unEstudianteX) => {
                return unEstudianteX.nota > 60;
            }
        );
        renderizarLista(aprobados);
    }
);


// Llamadas a funciones

//crearTarjeta(estudianteX);
//console.log(tarjeraX);

renderizarLista(estudiantes);