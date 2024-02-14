// importamos los componentes
import Header from "./components/Header"
import { useState } from "react";

function App() {
  // Siempre la logica o valores de js, se colocan antes del return
  // const hola = 'Hola mundo';
  // const auth = false;

  // el return esta reserva para lo que se va a mostrar en pantalla, solo html, combinado con js, pero no se coloca la logica, para eso lo colocamos antes del return

  // El uso de hooks/state debemos colocarlo antes del return y tampoco dentro d eun if
  const [cantidad, setCantidad] = useState(10000); // Definimos la varibale de un arreglo (destructurin de arreglos). Dento colocaremos el nombre que nosotros desearamos, en este caso se llamada cantidad, el segundo valor es la función que va a modificar el state "setCantidad"
  // useState() => dentro d elos parentesis colocaremos el valor inicial
  // Para modificar el valor, debemos utilizar el setCantidad

  // handle =? se nombra por convencion de react, que es una funcion asociada a un evento
  function handleChange(e) {
    // console.log(+e.target.value); // con el signo +, transformamos a enteros
    setCantidad(+e.target.value);
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
        {cantidad}
      </p>
    </div>
  )
}



export default App
