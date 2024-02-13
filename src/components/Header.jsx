// De las dos formas se puede exportar un componente, directo antes de crear la funcion o en la parte ifnerior del archivo 
//export default function Header() {
function Header() {
    return (
        <h1 className="text-4xl font-extrabold text-gray-500 text-center">
            Cúanto <span className="text-indigo-600">dinero</span> necesitas?
        </h1>
    );
}

export default Header;