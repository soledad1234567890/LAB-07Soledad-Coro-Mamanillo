import React, { useState } from 'react';

const CompWithProps = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h2>Componente con Props</h2>
      <div>
        <input
          type="text"
          placeholder="Escribe algo..."
          value={inputText}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Texto escrito: {inputText}</p>
      </div>
    </div>
  );
};

export default CompWithProps;
