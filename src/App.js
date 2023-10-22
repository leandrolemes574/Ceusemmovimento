import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Sobre from "./pages/Sobre/sobre";
import Home from "./pages/Home";
import Contato from "./pages/Contato/contato";
import CitacoesBiblicas from "./pages/CitacoesBiblicas/citacoesBiblicas";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/citacoesBiblicas' element={< CitacoesBiblicas />} />
        <Route path='/sobre' element={< Sobre />} />
        <Route path='/contato' element={< Contato />} />
      </Routes>
    </BrowserRouter>
  )
  }

export default App

