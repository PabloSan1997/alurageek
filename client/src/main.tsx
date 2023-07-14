import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProvedorContexto } from './context/index.tsx'
import './estilos/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <ProvedorContexto>
      <App />
    </ProvedorContexto>
  </React.StrictMode>,
)
