import imgd1 from "../img/footerstore1.png"
import imgd2 from "../img/footerstore2.png"

function Footer() {
  return (
    <footer className="footer max-width">
        <div className="foooter-top">
            <p>¿Preguntas? Llama al <a href="tel:0-320-32352" className="footer-title footer-item__a">0-320-32352</a></p> 
            <div className="footer-icono">
                <a href="#"><img className="footer-icono__img" src={imgd1} alt="footer" /></a>
                <a href="#"><img className="footer-icono__img" src={imgd2} alt="footer" /></a>
            </div>
        </div>
        <div className="footer-item">
            <ul className="footer-item__ul">
                <li className="footer-item__li"><a href="#" className="footer-item__a">Preguntas frecuentes</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Relaciones con inversionistas</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Formas de ver</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Información corporativa</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Solo en WhiteCompany</a></li>
            </ul>

            <ul className="footer-item__ul">
                <li className="footer-item__li"><a href="#" className="footer-item__a">Centro de ayuda</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Empleo</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Sobre Nosotros</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Contáctanos</a></li>
            </ul>

            <ul className="footer-item__ul">
                <li className="footer-item__li"><a href="#" className="footer-item__a">Cuenta</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Canjear tarjetas de regalo</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Privacidad</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">API</a></li>
            </ul>

            <ul className="footer-item__ul">
                <li className="footer-item__li"><a href="#" className="footer-item__a">Prensa</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Comprar tarjetas de regalo</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Preferencias de cookies</a></li>
                <li className="footer-item__li"><a href="#" className="footer-item__a">Avisos legales</a></li>
            </ul>
        </div>
        <div className="footer-idioma">
            <i className='bx bx-globe footer-idioma__i' />
        </div>
        <div className="footer-copy"><p className="footer-copy__title">White</p> <a className="footer-copy__a" href="#">Copyright©2022</a></div>
    </footer>
  )
}

export default Footer