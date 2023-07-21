import {useNavigate} from 'react-router-dom';
import '../estilos/bannerPromocional.scss';

export function BannerPromocion() {
  const ir = useNavigate();
  const navegar = () => {
    ir('/products/categoria/Consolas');
  }
  return (
    <div className="banner_promocion">
        <h2>Febrero Promocional</h2>
        <p>Productos Seleccionados con 33% de descuento</p>
        <button className='boton' onClick={navegar}>Ver Consolas</button>
    </div>
  )
}
