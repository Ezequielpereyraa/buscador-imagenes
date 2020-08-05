import React from 'react';
import Imagenes from '../Imagenes';

const ListaImagenes = ({ imagenes }) => {
  return (
    <div className='col-12 p-5 row'>
      {imagenes.map((imagen) => (
        <Imagenes imagen={imagen} key={imagen.id} />
      ))}
    </div>
  );
};

export default ListaImagenes;
