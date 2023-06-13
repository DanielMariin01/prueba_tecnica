import { Link } from 'react-router-dom'

export function Navegacion() {

    return (
        <div className='flex justify-between py-3'>
            <Link to='/tareas'>
            <h1 className='font-bold text-3xl mb-4 '> Listado de Clientes</h1>
            </Link>
          <button className='bg-indigo-500 px-2 py-1 rounded-lg'>
          <Link to={'/tareas-crear'}> Crear Cliente</Link>
          </button>
            

        
        </div>
    )
}