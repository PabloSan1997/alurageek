import '../estilos/footer.scss';

//Pie de pagina para mandar al usuario al github del proyecto
export function Footer() {
  return (
    <footer>
      <span className='texto'>La primera solicitud puede tardar varios minutos en cargar</span>
      <p>Pagina desarrollada por <a href="https://github.com/PabloSan1997/alurageek" target="_blank">Jose Pablo</a></p>
      <span className='fecha'>2023</span>
    </footer>
  )
}
