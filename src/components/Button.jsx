import React from 'react'

// Los props, se pasa en automatico en todos los componentes en react y como es un objeto, podemos hacerle destructuring desde los parametros ({operador, fn}), que es lo que se le pasa
function Button(props) {
    // console.log(props);
    return (
        <button
            type="button"
            className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
            onClick={props.fn}
        >
            {props.operador}
        </button>
    )
}

export default Button