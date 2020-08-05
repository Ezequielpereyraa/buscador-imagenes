import React, { useState } from 'react';
import Error from '../Error';
const Formulario = ({ setBusqueda }) => {
  // Hook
  const [datosInput, setDatosInput] = useState('');

  const [error, setError] = useState(false);
  const leerInput = (e) => {
    setDatosInput(e.target.value);
  };
  //Funcion submit
  const buscarImagen = (e) => {
    e.preventDefault();
    //validamos
    if (datosInput.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setBusqueda(datosInput);
  };
  return (
    <form onSubmit={buscarImagen}>
      <div className='row'>
        <div className='from-group col-md-8'>
          <input
            type='text'
            className='form-control'
            placeholder='Busca Imagen, Ej: Fubol,Cafe'
            value={datosInput}
            onChange={leerInput}
          />
        </div>
        <div className='form-group col md-4'>
          <input
            type='submit'
            value='Buscar'
            className='btn btn-large btn-danger btn-block'
          />
        </div>
      </div>
      {error ? <Error mensaje='Agrega un termino de busqueda' /> : null}
    </form>
  );
};

export default Formulario;
