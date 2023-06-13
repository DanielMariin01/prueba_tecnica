
import { useNavigate } from 'react-router-dom'

export function ClientesCard({ clientes }) {

    const navigate = useNavigate();

    return (

        <div 
        className='bg-gray-800 text-white p-4  hover: cursor-pointer' 

            onClick={() => {
                navigate('/tareas/' + clientes.id)

            }}
       

        >
            <p className='text-xl font-bold capitalize'>{clientes.nombre}</p>
            <p className='text-gray-500 '>{clientes.email}</p>
            <p className='text-gray-500 '>{clientes.fecha_Nacimiento}</p>

        </div>

    )
}