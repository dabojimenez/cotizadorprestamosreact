// Este archivo es JS, ya que solo sera una rchivo con funciones unicamente
// Ventasjas, evitamso cargar a nuestro componente de muchas funciones y es reutilizable en diferentes lugares
const formatearDinero = valor => {
    // Intl, api de internacionalizacion de js
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    // retorna un stirng con el signo de dolar
    return formatter.format(valor)
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // Mientras mayor es la cantidad solicitada menor es el interés
    if (cantidad < 5000) {
        total = cantidad * 1.5;
    }else if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;
    }else if (cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.3;
    }else{
        total = cantidad * 1.2;
    }

    // plazo, a mas plazo mayor interes
    if (plazo === 3) {
        total *= 1.1;
    }else if (plazo === 6) {
        total *= 1.2;
    }else if (plazo === 12) {
        total *= 1.3;
    }else{
        total *= 1.4;
    }

    return total;
}

export {
    formatearDinero,
    calcularTotalPagar,
}