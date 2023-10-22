import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Logotipo from '../../assets/CeusEmMovimento.png'

    function Footer () {

    return (
        <>
        <footer>

            <nav className="footer-container">
                <ul className="footer-list">
                <Link to='/'>
                    <li>Home</li>
                    </Link>

                    <Link to='/citacoesBiblicas'>
                    <li>Citações Biblicas</li>
                    </Link>

                    <Link to='/sobre'>
                    <li>Sobre</li>
                    </Link>

                    <Link to='/contato'>
                    <li>Contato</li>
                    </Link>
                </ul>
            </nav>

            <img id="logotipo" alt="" src={Logotipo} />

                <span className="adress">Quadra 02 conjunto E lote 12 - Setor Sul - Gama, DF</span>
                <span> Todos os direitos reservados © </span>
                <span> Desenvolvido por: Leandro Lemes </span>
                <h5>Imagens gratuitas - Desenvolvido por <a href="https://freepik.com." 
                target= "_blank" rel="noreferrer noopener">Freepik</a></h5>

        </footer>
        </>
    )
 }

 export default Footer
 

