import React, { useState, useEffect } from "react";
import "../css/Preloader.css"; 

const WordRevealAnimation = () => {
  const texts = [
    "FLY OVER BRIDGE",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = texts[currentTextIndex].split(" ");

  useEffect(() => {
    const revealNextWord = () => {
      if (currentWordIndex < words.length) {
        setTimeout(() => {
          setCurrentWordIndex((prev) => prev + 1);
        }, 500);
      } else {
        setTimeout(hideWords, 2000);
      }
    };

    revealNextWord();
  }, [currentWordIndex]);

  const hideWords = () => {
    setTimeout(() => {
      setCurrentWordIndex(0);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="text-container">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word ${index < currentWordIndex ? "show" : ""}`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordRevealAnimation;
