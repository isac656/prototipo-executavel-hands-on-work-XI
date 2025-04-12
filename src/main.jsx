import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './telas/cadastro.jsx';
import Login from './telas/login.jsx';
import Home from './telas/Home.jsx';
import Mapa from './telas/Mapa.jsx';
import Desafios from './telas/Desafios.jsx';
import Eventos from './telas/Eventos.jsx';

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/mapas",
        element: <Mapa/>
      },
      {
        path: "/desafios",
        element: <Desafios/>
      },
      {
        path: "/eventos",
        element: <Eventos/>
      }

  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
