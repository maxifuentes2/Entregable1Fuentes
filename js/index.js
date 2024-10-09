// variables y constantes que voy a usar
let totalCuenta = parseFloat(prompt("¿Cuál es el total de la cuenta?"));
let porcentajePropina = parseFloat(prompt("¿Qué porcentaje de propina deseas dejar? (ej. 15 para 15%)"));
const IVA = 21; // constante para el iva en porcentaje 

// calculo la propina con la funcion calcularPropina
function calcularPropina(cuenta, porcentaje) {
    return (cuenta * (porcentaje / 100)).toFixed(2);
}

// calculo el total de iva y propina 
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

// verifico si dieron un minimo de 5% de propina y si es menor a 5% arroja un mensaje al usuario indicandole que al menos debe dar 5% de propina
if (porcentajePropina < 5) {
    alert("Has seleccionado un porcentaje bajo. Te sugerimos dejar un mínimo del 5% de propina.");
} else {
    alert("Muchas gracias por su propina.");
}

// muestra en la consola la propina de 5%, 10% y 15%
console.log("Posibles porcentajes de propina:");
for (let i = 5; i <= 15; i += 5) {
    console.log(i + "% de propina sería: $" + calcularPropina(totalCuenta, i));
}

// ejecuta las funciones
let montoPropina = calcularPropina(totalCuenta, porcentajePropina);
let totalConIVAyPropina = calcularTotalConIVAyPropina(totalCuenta, montoPropina);

mostrarResultados(montoPropina, totalConIVAyPropina);
