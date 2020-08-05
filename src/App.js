import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaImagenes from './components/ListaImagenes';
const App = () => {
  const [busqueda, setBusqueda] = useState(''); // Para guardar los datos del input
  const [imagenes, setImagenes] = useState([]); // guarda las imagenes de la respuesta de la api
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(3);

  useEffect(() => {
    if (busqueda.trim() === '') return; // Valida para que la primer peticion
    const paginacion = 30; // La cantidad de imagenes que devuelve por peticion
    const key = '17436486-f7caa81a6dba010dde48f9433';
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${paginacion}&page=${paginaActual}`;
    const ConsultaApi = async () => {
      // Funcion para peticiones
      const datosFetch = await fetch(url);
      const datos = await datosFetch.json();
      setImagenes(datos.hits); // Los datos son guardados en el state, para ser usados en otros componentes
      //calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(datos.totalHits / paginacion); // con esta funcion se calcula la cantidad de paginas
      setTotalPaginas(calcularTotalPaginas); // se guarda el total de paginas
    };
    ConsultaApi();
    // Mover Pagina hacia arriba
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({
      behavior: 'smooth',
    });
  }, [busqueda, paginaActual]);
  //definir la pagina Actual
  const paginaAnterior = () => {
    const nuevaPagina = paginaActual - 1;
    if (nuevaPagina === 0) return;
    setPaginaActual(nuevaPagina);
  };
  const paginaSiguente = () => {
    const nuevaPagina = paginaActual + 1;
    if (nuevaPagina > totalPaginas) return;
    setPaginaActual(nuevaPagina);
  };

  return (
    <div className='container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de Imágenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className='row justify-content-center'>
        <ListaImagenes imagenes={imagenes} />
        {paginaActual === 1 ? null : (
          <button className='btn btn-info mr-1' onClick={paginaAnterior}>
            &laquo; Anterior
          </button>
        )}
        {paginaActual === totalPaginas ? null : (
          <button className='btn btn-info mr-1' onClick={paginaSiguente}>
            Siguente &raquo;
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
