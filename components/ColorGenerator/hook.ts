import { useState } from 'react';

const useContainer = () => {
  const [color, setColor] = useState('white');
  const generateColor = () => {
    const colorString = Math.random().toString(16);
    const color = '#' + colorString.substring(colorString.length - 6);
    setColor(color);
  };

  return { color, generateColor };
};

export default useContainer;
