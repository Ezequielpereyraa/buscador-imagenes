import React from 'react';

const Imagenes = ({ imagen }) => {
  // Extraer los valores
  const { likes, previewURL, tags, views, largeImageURL } = imagen;
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 '>
      <div className='card'>
        <img src={previewURL} alt={tags} className='card-img-top' />
      </div>
      <div className='card-body'>
        <p className='card-text'>{likes} Me Gusta</p>
        <p className='card-text'>{views} Vistas </p>
      </div>
      <div className='card-footer'>
        <a
          href={largeImageURL}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary btn-block'>
          Ver Imagen
        </a>
      </div>
    </div>
  );
};

export default Imagenes;
