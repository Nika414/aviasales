import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import HorizontalFilterButton from './HorizontalFilterButton';
import { chooseSorting } from '../store/filterTicketsSlice'

export default function FilterBarHorizontal() {
  const [activeTub, setActiveTub] = useState('cheapest');
  const dispatch = useDispatch();
  
  

  function handleCheapestButtonState() {
    setActiveTub('cheapest');
    dispatch(chooseSorting('cheapest'))
  }
  function handleFastestButtonState() {
    setActiveTub('fastest');
    dispatch(chooseSorting('fastest'))
  }

  function handleOptimalButtonState() {
    setActiveTub('optimal');
    dispatch(chooseSorting('optimal'))
  }

  return (
    <div className="filter-bar-horizontal__container">
      <HorizontalFilterButton onClick={handleCheapestButtonState} text="САМЫЙ ДЕШЕВЫЙ" activeTub={activeTub} type='cheapest' />
      <HorizontalFilterButton onClick={handleFastestButtonState} text="САМЫЙ БЫСТРЫЙ" activeTub={activeTub} type='fastest' />
      <HorizontalFilterButton onClick={handleOptimalButtonState} text="ОПТИМАЛЬНЫЙ" activeTub={activeTub} type='optimal' />
    </div>
  );
}
