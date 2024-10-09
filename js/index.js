// variables y constantes que voy a usar
let totalCuenta = parseFloat(prompt("¿Cuál es el total de la cuenta?"));
let porcentajePropina = parseFloat(prompt("¿Qué porcentaje de propina deseas dejar? (ej. 15 para 15%)"));
const IVA = 21; // constante para el IVA en porcentaje

// array para almacenar las propinas posibles (5%, 10%, 15%)
let posiblesPropinas = [];

// calcula la propina con la función calcularPropina
function calcularPropina(cuenta, porcentaje) {
    return (cuenta * (porcentaje / 100)).toFixed(2);
}

// calcula el total con IVA y propina
function calcularTotalConIVAyPropina(cuenta, propina) {
    let totalConIVA = cuenta * (1 + IVA / 100);
    return (parseFloat(totalConIVA) + parseFloat(propina)).toFixed(2);
}

// resultados
function mostrarResultados(propina, totalConIVAyPropina) {
    console.log("Monto de la propina: $" + propina);
    console.log("Total con IVA y propina: $" + totalConIVAyPropina);
    alert("La propina que deberías dejar es: $" + propina);
    alert("El total con IVA y propina incluida es: $" + totalConIVAyPropina);
}

// verifica si dieron un mínimo de 5% de propina y si es menor a 5% arroja un mensaje al usuario
if (porcentajePropina < 5) {
    alert("Has seleccionado un porcentaje bajo. Te sugerimos dejar un mínimo del 5% de propina.");
} else {
    alert("Es una cantidad considerable de propina.");
}

// almacena en array y muestra en consola las posibles propinas
console.log("Posibles porcentajes de propina:");
for (let i = 5; i <= 15; i += 5) {
    let propinaCalculada = calcularPropina(totalCuenta, i);
    posiblesPropinas.push(propinaCalculada); // guarda la propina en el array
    console.log(i + "% de propina sería: $" + propinaCalculada);
}

// muestra el contenido del array de propinas
console.log("Propinas calculadas:", posiblesPropinas);

// ejecuta las funciones
let montoPropina = calcularPropina(totalCuenta, porcentajePropina);
let totalConIVAyPropina = calcularTotalConIVAyPropina(totalCuenta, montoPropina);

mostrarResultados(montoPropina, totalConIVAyPropina);
