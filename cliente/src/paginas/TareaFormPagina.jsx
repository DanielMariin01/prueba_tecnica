import { useForm } from 'react-hook-form';
import { useEffect } from 'react'
import { createCliente, eliminarCliente, actualizarCliente, getClientes } from '../api/tareas.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'

export function FormPagina() {

    const { register, handleSubmit, formState: { errors
    }, setValue } = useForm();
    const navegate = useNavigate();
    const params = useParams();

    const onsubmit = handleSubmit(async data => {

        if (params.id) {

            console.log(data);
            await actualizarCliente(params.id, data);
            toast.success('Se ha actualizado el cliente');

        } else {
            await createCliente(data);
            toast.success('Cliente creado');
        }

        navegate('/tareas')

    });

    useEffect(() => {
        async function loadCliente() {
            if (params.id) {

                const res = await getClientes(params.id);
                setValue('nombre', res.data.nombre)
                setValue('email', res.data.email)
                setValue('fecha_Nacimiento', res.data.fecha_Nacimiento)
                setValue('fecha_creacion', res.data.fecha_creacion)

            }
        }
        loadCliente();
    }, [])

    return (

        <div className='max-w-xl mx-auto' >
            <form onSubmit={onsubmit} className='mx-auto' >
                <h1 className='font-bold text-3xl mb-4 '>Formulario</h1>
                <input type="text" placeholder="Ingrese su nombre"
                    {...register("nombre", { required: true })}
                    className='bg-slate-300 p-3 rounded-lg block w-full mb-3' />
                {errors.nombre && <span className='text-sm text-red-500'>Este campo es requerido</span>}

                <input type="email" placeholder="Ingrese su correo electronico"
                    {...register("email", { required: true })} className='bg-slate-300 p-3 rounded-lg block w-full mb-3' />

                {errors.email && <span className='text-sm text-red-500'>Este campo es requerido</span>}
                <br />
                <label htmlFor="">Fecha de nacimiento</label>
                <br />
                <input type="date" placeholder="Fecha de nacimiento"
                    {...register("fecha_Nacimiento", { required: true })} className='bg-slate-300 p-3 rounded-lg block w-full mb-3' />

                {errors.fecha_Nacimiento && <span className='text-sm text-red-500'>Este campo es requerido</span>}
                <br />
                <label htmlFor="">Fecha de ingreso</label>
                <br />
                <input type="date" placeholder="Fecha de ingreso"
                    {...register("fecha_creacion", { required: true })} className='bg-slate-300 p-3 rounded-lg block w-full mb-3' />
                {errors.fecha_Ingreso && <span className='text-sm text-red-500'>Este campo es requerido</span>}
                
                <button className='bg-cyan-500 px-3 py-2 rounded-md mt-4 hover:bg-sky-400'>Guardar</button>
            </form>
            {
                params.id && <button
                    className='bg-red-500 px-3 py-2 rounded-md  mt-3'
                    onClick={async () => {

                        const confirmar = window.confirm('Esta seguro de eliminar ? ')
                        if (confirmar) {
                            await eliminarCliente(params.id);
                            toast.success('Se ha eliminado el cliente');
                            navegate('/tareas')

                        }
                    }

                    }>Eliminar</button>
            }
        </div>

    )
}