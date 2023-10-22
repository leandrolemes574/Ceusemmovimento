import React from "react";
import './contato.css';
import Header from "../../components/Header";
import { useForm, ValidationError } from '@formspree/react';
import Footer from "../../components/Footer";

function Contato() {
    const [state, handleSubmit] = useForm("mqkvbwqw");

    if (state.succeeded) {
        return <p id="thanks">Obrigado pelo contato!</p>;
    }

    return (
        <>
        <div className="width">
            <Header />
                <div className="box-contact">
                    <section>
                        <h2>Contato</h2>
                        <h2 id="pray">Pedido de oração</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Seu Nome:</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                />
                            <label htmlFor="email">Seu Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            <label htmlFor="message">Sua Mensagem:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            <button type="submit" disabled={state.submitting}>
                                Enviar
                            </button>
                        </form>
                    </section>
                </div>
                <div>
                    <h5>Image by jcomp<a 
                    href="https://www.freepik.com/free-photo/teenage-girl-with-praying-sunny-nature_3952255.htm#query=ora%C3%A7%C3%A3o&position=47&from_view=search&track=sph" 
                    target= "_blank" rel="noreferrer noopener">Freepik</a></h5>
                </div>
            < Footer  />
        </div>    
        </>
    );
}

export default Contato;
