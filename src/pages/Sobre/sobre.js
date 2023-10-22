import React from "react";
import './sobre.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import sobre from '../../assets/sobre.jpg'
import pastores from '../../assets/pastors.jpeg'



function Sobre(){

    return (
        <>
        <Header />

            <div className="container-above">

                <div className="left">
                    <img id="sobre" alt='' src={ sobre } />
                        <div>
                            <h5 id="foto-sobre">Imagem de<a 
                            href="https://br.freepik.com/fotos-gratis/criancas-fazendo-parte-da-escola-dominical_30117901.htm#page=2&query=pessoa%20orando&position=3&from_view=search&track=ais" 
                            target= "_blank" rel="noreferrer noopener">Freepik</a></h5>
                        </div>
                </div>
                        
                <div className="right">
                    <h3 style={{marginTop: '70px'}}>Um pouco sobre nós</h3>
                    <div className="txt-1">
                        “Ide, portanto, fazei discípulos de todas as nações, 
                        batizando-os em nome do Pai, e do Filho, e do Espírito Santo”. 
                        Mateus 28:19.
                    </div>
                    <div className="txt-2">
                        Ciente da Grande Comissão deixada por Jesus, o Cristo, 
                        a Comunidade Céus em Movimento tem como missão propagar a mensagem do evangelho 
                        a todos que estiverem dispostos a seguir ao Mestre, 
                        que retornou ao céu deixando aos seus seguidores a 
                        responsabilidade de proclamar as Boas Novas da salvação, 
                        guiados pelo Espírito Santo. 
                    </div>
                    <div className="txt-3">
                        “Porque Deus amou ao mundo de tal maneira que deu o seu Filho unigênito, 
                        para que todo o que nele crê não pereça, mas tenha a vida eterna”. João 3:16.
                    </div>
                    <div className="txt-4">
                        Cremos na morte e ressurreição de Jesus, o filho de Deus, que deu sua vida por amor de todos os habitantes da terra, 
                        para a remissão dos nossos pecados, e para que um dia possamos morar com Ele no céu.
                    </div>
                </div>

            </div>

            <div id="container-pst">

                <div id="content-pst">
                    <img id="pastores" alt='' src={ pastores } />   
                </div>

                <div id="txt-pst">
                    <h3 id="pst-content">
                        Pastores
                    </h3>
                    <div className="txt-5">
                        Pastor Daniel Sacramento<br/>
                        Pastora Ana Paula Sacramento
                    </div>
                    <div className="txt-6">
                        Pastores Auxiliares<br/>
                        Pastor Natanel<br/>
                        Pastora Aldenora
                    </div>
                </div>

            </div>
            
        < Footer />
        </>
    )
}

export default Sobre
