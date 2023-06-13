import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TareaPagina } from './paginas/TareaPagina';
import { FormPagina } from './paginas/TareaFormPagina';
import { Navegacion } from './componentes/navegacion';
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div >
      <BrowserRouter >
        <div className='container mx-auto'>
          <Navegacion />
          <Routes>
            <Route path='/' element={<Navigate to='/tareas' />} />
            <Route path='/tareas' element={<TareaPagina />} />
            <Route path='/tareas-crear' element={<FormPagina />} />
            <Route path='/tareas/:id' element={<FormPagina />} />
          </Routes>
          <Toaster>

          </Toaster>
        </div>
      </BrowserRouter >
    </div>

  );
}

export default App
