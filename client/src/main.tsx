import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './estilos/index.scss';
import { CookiesProvider } from 'react-cookie';
import { ProvedorContexto } from './context/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <CookiesProvider>
    <ProvedorContexto>
      <App />
    </ProvedorContexto>
  </CookiesProvider>

)
