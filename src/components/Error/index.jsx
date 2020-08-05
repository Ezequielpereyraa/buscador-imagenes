import React from 'react';

const Error = ({ mensaje }) => {
  console.log('Error - mensaje', mensaje);
  return <p className='alert alert-primary text-center  my-3 p-4'>{mensaje}</p>;
};

export default Error;
