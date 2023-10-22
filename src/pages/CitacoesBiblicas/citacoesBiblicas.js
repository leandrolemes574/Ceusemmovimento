import React, { useState, useEffect } from "react";
import './citacoesBiblicas.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

const API_BASE_URL = "https://www.abibliadigital.com.br/api";

function CitacoesBiblicas() {
    const [verse, setVerse] = useState({});
    const [book, setBook] = useState("nvi");
    const [chapter, setChapter] = useState(Math.floor(Math.random() * 50) + 1);
    

    useEffect(() => {
        fetchVerse();
    }, [book, chapter]);

    const fetchVerse = async () => {
        try {
            const response = await axios.get(
                `${API_BASE_URL}/verses/${book}/sl/${chapter}`
            );
            setVerse(response.data);
        } catch (error) {
            console.error("Erro ao buscar versículo: ", error);
        }
    };

    const handlePreviousChapter = () => {
        setChapter(chapter - 1);
    };

    const handleNextChapter = () => {
        setChapter(chapter + 1);
    };


    return (
        <>
            <Header />

                <div className="mensagem-content">
                
                    <h3>Texto bíblico</h3>
                    {verse && verse.verses && (
                        <div className="bible-content">
                            <h4>
                                {verse.book.name} {verse.chapter.number}
                            </h4>
                            <aside id="text-bible">
                                {verse.verses.map((verse) => (
                                    <div key={verse.number}>{verse.text}</div>
                                ))}
                            </aside>
                        </div>
                    )}
                    <div className="btn-change">
                        <button id="btn-prev" onClick={handlePreviousChapter}>Capítulo Anterior</button>
                        <button id="btn-next" onClick={handleNextChapter}>Próximo Capítulo</button>
                    </div>
                </div>

            <Footer />
        </>
    );
}

export default CitacoesBiblicas;