import React, { useState } from 'react';
import HorizontalFilterButton from './HorizontalFilterButton';

export default function FilterBarHorizontal() {
  const [activeTub, setActiveTub] = useState('cheapest')

  function handleCheapestButtonState() {
    setActiveTub('cheapest')
  }
  function handleFastestButtonState() {
    setActiveTub('fastest')
  }

  function handleOptimalButtonState() {
    setActiveTub('optimal')
  }

  return (
    <div className="filter-bar-horizontal__container">
      <HorizontalFilterButton onClick={handleCheapestButtonState} text="САМЫЙ ДЕШЕВЫЙ" activeTub={activeTub} type='cheapest' />
      <HorizontalFilterButton onClick={handleFastestButtonState} text="САМЫЙ БЫСТРЫЙ" activeTub={activeTub} type='fastest' />
      <HorizontalFilterButton onClick={handleOptimalButtonState} text="ОПТИМАЛЬНЫЙ" activeTub={activeTub} type='optimal' />
    </div>
  );
}
