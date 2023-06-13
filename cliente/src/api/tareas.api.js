

import axios from 'axios'

const clientesApi = axios.create({
   baseURL: 'http://localhost:8000/tareas/appi/1/tareas/'
})
export const getAllTareas = () => {
   return clientesApi.get('/')
}
export const getClientes = (id) => clientesApi.get(`/${id}/`)

export const createCliente = (clientes) => {
   return clientesApi.post('/', clientes)
}
export const eliminarCliente = (id) => clientesApi.delete(`/${id}`);

export const actualizarCliente = (id, clientes) => clientesApi.put(`/${id}/`, clientes)