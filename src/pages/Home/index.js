import React from "react";
import './home.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cards from "../../components/cards/cards";




function Home(){

    return (
        <>
        < Header />
            <div id="banner">
                <h1>Comunidade Céus em Movimento</h1>
                <h2>Vivendo o evangelho com simplicidade</h2>
            </div>
            <div style={{backgroundColor: '#f2f2f2'}}>
                <h5 style={{color: '#000'}}>Imagem de vecstock<a 
                href="https://br.freepik.com/fotos-gratis/silhueta-de-uma-pessoa-apreciando-a-beleza-da-natureza-gerada-pela-ia_43272820.htm#query=adorando%20no%20por%20do%20sol%20no%20campo&position=0&from_view=search&track=ais"
                target= "_blank" rel="noreferrer noopener"> no Freepik</a></h5>
            </div>
            <div className="text-content">
                <p>
                    Venha participar de um dos nossos encontros 
                    semanais.
                </p>
            </div>
        < Cards />
        < Footer />
        </>
    )
}

export default Home


