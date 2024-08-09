import React from 'react';

const InputChange = () => {
  const handleChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  return (
    <input type="text" onChange={handleChange} />
  );
};

export default InputChange;
