import { useState, useEffect } from 'react';

import './LettersDigits.css'

const LettersDigits = ({ text, velocidade = 40 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    let intervalId;

    const chars = '_';
    let currentText = Array(text.length).fill('');

    intervalId = setInterval(() => {
      if (i >= text.length) {
        clearInterval(intervalId);
        setDisplayText(text);
        return;
      }

      for (let j = i; j < text.length; j++) {
        currentText[j] = chars[Math.floor(Math.random() * chars.length)];
      }

      currentText[i] = text[i];
      setDisplayText(currentText.join(''));
      i++;
    }, velocidade);

    return () => clearInterval(intervalId);
  }, [text, velocidade]);

  return (
    <div className='home-title' style={{ fontFamily: 'monospace' }}>
      {displayText}
    </div>
  );
};

export default LettersDigits;
