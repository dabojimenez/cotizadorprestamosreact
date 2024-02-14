// importamos los componentes
import Button from "./components/Button";
import Header from "./components/Header"
import { useState, useEffect } from "react";
import { calcularTotalPagar, formatearDinero } from "./helpers";

function App() {
  // Siempre la logica o valores de js, se colocan antes del return
  // const hola = 'Hola mundo';
  // const auth = false;

  // el return esta reserva para lo que se va a mostrar en pantalla, solo html, combinado con js, pero no se coloca la logica, para eso lo colocamos antes del return

  // El uso de hooks/state debemos colocarlo antes del return y tampoco dentro d eun if
  const [cantidad, setCantidad] = useState(10000); // Definimos la varibale de un arreglo (destructurin de arreglos). Dento colocaremos el nombre que nosotros desearamos, en este caso se llamada cantidad, el segundo valor es la función que va a modificar el state "setCantidad"
  // useState() => dentro d elos parentesis colocaremos el valor inicial
  const [meses, setMeses] = useState(3);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect( () => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);
    
  }, [cantidad, meses]); // despues de las lalves, se le pasa un arreglo de dependencias. Si se lo pasa vacio, se ejecutara una vez, en relaidad lo que se le pasa van a ser los componentes que va a escuchar y funcionan como disparadores para ejecutar el codigo que este dentro de useEffect

  useEffect( () => {
    // Calcular el pago mensual
    setPago(total / meses)
  }, [total]);

  // handle =? se nombra por convencion de react, que es una funcion asociada a un evento
  function handleChange(e) {
    // console.log(+e.target.value); // con el signo +, transformamos a enteros
    // Para modificar el valor, debemos utilizar el setCantidad
    setCantidad(+e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;
    if (valor < MIN) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;
    if (valor > MAX) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  // Variables que no se modifican
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  return (
    // className => para colocar las clases de css, ya que class, es una palabra reservada de JS, se puede colocar class, pero no es lo recomendable ya que nos dara ciertas advertencias
    // <h1 className="text-6xl font-extrabold">Hola mundo</h1>
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      {/* cuando, esten las llaves, es porque se le define que se pasa un valor de js */}
      {/* {hola} */}
      {/* {auth ? 'autenticado' : 'no autenticado'} */}

      {/* Importamos nuestro componneten, tanto en la paete superior del archivo con import y en el codigo que s evaya a usar */}
      <Header />

      <div className="flex justify-between my-6">

        <Button
          operador='-' // es el nombre del prop
          fn={handleClickDecremento}
        />
        <Button
          operador='+'
          fn={handleClickIncremento}
        />

      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        // const formulario = document.querySelector('#formulario');
        // formulario.addEventListener('change')
        // Todo lo d ela aprte superior se hace en JS a patazo, pero en react solo se ahce con la linea neferior, solo con onChange={}
        // onChange={}
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a apgar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={meses}
        onChange={e => setMeses(+e.target.value)}
      >
        <option value={3}>3 Meses</option>
        <option value={6}>6 Meses</option>
        <option value={12}>12 Meses</option>
        <option value={24}>24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold"> {meses} Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
        <p className="text-xl text-gray-500 text-center font-bold"> {formatearDinero(pago)} Pagos mensuales</p>
      </div>

    </div>
  )
}



export default App
