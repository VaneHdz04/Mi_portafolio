import { useState, useEffect } from 'react';

export const useTypewriter = (words, typingSpeed = 120, deletingSpeed = 60, pause = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Retraso inicial para sincronizar con tus animaciones CSS
    const initialDelay = setTimeout(() => {}, 1000);
    
    const currentWord = words[wordIndex];
    let timer;

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timer = setTimeout(() => {}, 500); // Pausa antes de nueva palabra
      } else {
        timer = setTimeout(() => setText(currentWord.substring(0, text.length - 1)), deletingSpeed);
      }
    } else {
      if (text === currentWord) {
        timer = setTimeout(() => setIsDeleting(true), pause);
      } else {
        timer = setTimeout(() => setText(currentWord.substring(0, text.length + 1)), typingSpeed);
      }
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(initialDelay);
    };
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
};