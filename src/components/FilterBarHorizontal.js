import React, { useState } from "react";

export default function FilterBarHorizontal({ text, selector }) {
  const [isCheapestButtonActive, setIsCheapestButtonActive] = useState(true);
  const [isFastestButtonActive, setIsFastestButtonActive] = useState(false);
  const [isOptimalButtonActive, setIsOptimalButtonActive] = useState(false);

  function handleCheapestButtonState() {
    if (!isCheapestButtonActive) {
      setIsCheapestButtonActive(true);
      setIsFastestButtonActive(false);
      setIsOptimalButtonActive(false);
    }
  }
  function handleFastestButtonState() {
    if (!isFastestButtonActive) {
      setIsCheapestButtonActive(false);
      setIsFastestButtonActive(true);
      setIsOptimalButtonActive(false);
    }
  }

  function handleOptimalButtonState() {
    if (!isOptimalButtonActive) {
      setIsCheapestButtonActive(false);
      setIsFastestButtonActive(false);
      setIsOptimalButtonActive(true);
    }
  }

  return (
    <div className={`filter-bar-horizontal__container ${selector}`}>
      <button
        onClick={handleCheapestButtonState}
        className={`filter-bar-horizontal__button filter-bar-horizontal__button_type_cheapest ${
          isCheapestButtonActive ? "filter-bar-horizontal__button_active" : ""
        }`}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        onClick={handleFastestButtonState}
        className={`filter-bar-horizontal__button filter-bar-horizontal__button_type_fastest ${
          isFastestButtonActive ? "filter-bar-horizontal__button_active" : ""
        }`}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        onClick={handleOptimalButtonState}
        className={`filter-bar-horizontal__button filter-bar-horizontal__button_type_optimal ${
          isOptimalButtonActive ? "filter-bar-horizontal__button_active" : ""
        }`}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}
