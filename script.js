console.log("hola mundo");

const nombre = "ismael"
let apellido = "medina"

console.log(nombre);
console.log(apellido);

// nombre = "jesus";
apellido = "villagomez"

console.log(apellido);



// objetos de javaScript
const persona = {
    nombre : "ismael",
    apellido : "Medina",
    edad : 20,
    apodo :  [
        "isma",
        "chucho",
        "bonbom"
    ]
}
persona.apellido = "Medina Ismael "
console.log(persona.apellido);
console.log ("==============  Fin Objetos ===============")

//funciones java script
//function saludar (nombre) {
  //  return " hola" + nombre;
//}
//const saludar = (nombre) => {
    //return "hola" + nombre;

const saludar = nombre => 
    "hola " + nombre;


const saludo = saludar(persona.apellido); //"hola jose"
console.log(saludo);
console.log("===========FIN FUNCIONES===========")
console.log("================== LISTAS ==========")

const ListaNumeros = [
    5,10,3,8,9
];
console.log(ListaNumeros);
ListaNumeros[3] = 7;
console.log(ListaNumeros);
const numerosMultiplicados = ListaNumeros.map(
    (numeroEnQueVoy) => {
        return numeroEnQueVoy * 3;
    }
);

console.log(numerosMultiplicados)

const numerosEnObjetos = ListaNumeros.map(
    (numeroEnQueVoy) => {
        return{
            valor: numeroEnQueVoy
        }
    }
)
console.log(numerosEnObjetos)