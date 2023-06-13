
import { useEffect, useState } from 'react';
import {getAllTareas} from '../api/tareas.api';
import {ClientesCard} from './clientesCard';

export function ListaClientes() {

 const [clientes, setClientes] = useState([]);

    useEffect(() => {
       

         async function cargarTareas(){
            const res = await getAllTareas();
            setClientes(res.data);
          }
          cargarTareas();
     
    }, [])
    return (
        <div    className='grid grid-cols-4 gap-3'>
        {clientes.map(clientes => (
           <ClientesCard key={clientes.id} clientes={clientes} />
        ))}
                        
        </div>
    )
}