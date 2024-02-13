// importamos los componentes
import Header from "./components/Header"

function App() {
  // Siempre la logica o valores de js, se colocan antes del return
  // const hola = 'Hola mundo';
  // const auth = false;

  // el return esta reserva para lo que se va a mostrar en pantalla, solo html, combinado con js, pero no se coloca la logica, para eso lo colocamos antes del return
  return (
    // className => para colocar las clases de css, ya que class, es una palabra reservada de JS, se puede colocar class, pero no es lo recomendable ya que nos dara ciertas advertencias
    // <h1 className="text-6xl font-extrabold">Hola mundo</h1>
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      {/* cuando, esten las llaves, es porque se le define que se pasa un valor de js */}
      {/* {hola} */}
      {/* {auth ? 'autenticado' : 'no autenticado'} */}

      {/* Importamos nuestro componneten, tanto en la paete superior del archivo con import y en el codigo que s evaya a usar */}
      <Header />
    </div>
  )
}

export default App
