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

export {
    formatearDinero,
}