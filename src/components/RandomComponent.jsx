import React, { useState } from 'react';

const RandomComponent = () => {

  const [randomValue, setRandomValue] = useState(0);

  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const handleClick = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    setRandomValue(numeroAleatorio);
  };

  
  const resetValue = () => {
    setRandomValue(0);
  };

  return (
    <div>
      <h2>Componente Valor Aleatorio</h2>
      <p>Valor Aleatorio: {randomValue}</p>
      <button onClick={handleClick}>Generar Nuevo Valor</button>
      <button onClick={resetValue}>Resetear</button>
    </div>
  );
};

export default RandomComponent;
