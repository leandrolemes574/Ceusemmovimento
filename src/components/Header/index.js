import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logotipo from '../../assets/CeusEmMovimento.png'

    function Header () {

    return (
        <>
        <header>
            <img id="Logo" alt='' src={ Logotipo } />
            <nav>
                <ul>
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
        </header>
        </>
    )
 }

 export default Header
 

