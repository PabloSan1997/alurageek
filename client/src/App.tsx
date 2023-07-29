import {useRoutes, HashRouter, Navigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { Editar } from './pages/Editar';
import {ProductOne} from './pages/ProductOne';
import { Login } from './pages/Login';
import { NuevoProducto } from './pages/NuevoProducto';
import { Buscar } from './pages/Buscar';



const Rutas = () => useRoutes([
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/',
    element:<Navigate to='/home'/>
  },
  {
    path:'/products',
    element:<Productos/>
  },
  {
    path:'/products/categoria/:categoria',
    element:<Productos/>
  },
  {
    path:'/edit',
    element:<Editar/>
  },
  {
    path:'/products/especifico/:id_product',
    element:<ProductOne/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/agregar',
    element:<NuevoProducto/>
  },
  {
    path:'/editar/:id_product',
    element:<Editar/>
  },
  {
    path:'/buscar/:buscar',
    element:<Buscar/>
  },
  {
    path:'*',
    element:<p className='not-found'>Not found 404</p>
  }
]);

function App() {
  
  return (
    <HashRouter>
      <Rutas/>
    </HashRouter>
  );
}

export default App
