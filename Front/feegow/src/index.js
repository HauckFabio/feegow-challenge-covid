import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import ReactDOM from 'react-dom';
import App from './views/home/App';
import CadastrarFuncionario from './views/cadastro/CadastrarFuncionario';
import ListagemFuncionarios from './views/listagem/ListagemFuncionarios';
import Navbar from './components/Navbar'; 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function PrivateRoute()
{
  useEffect(() => { 
    



  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastrar-funcionario" element={<CadastrarFuncionario />} />
        <Route path="/listar-funcionarios" element={<ListagemFuncionarios />} />
        <Route path="*" element={<App />} />
      </Routes>
    </>
  );


}

ReactDOM.render(
  <>
  <BrowserRouter>
    <div className='wrapper bg-dark'>
    <Navbar />
        <div className='main bg-dark'>
          <PrivateRoute />
        </div>
    <Footer />
    </div>
  </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
