import React, { forwardRef } from 'react';

const CustomedInput = forwardRef(({ value, onClick, onChange, lastOne, placeholder }, ref) => (
    <input
        value={value}
        className={`react-datepicker___custom-input ${lastOne ? 'react-datepicker___custom-input_place_last' : ''}`}
        onClick={onClick}
        onChange={onChange}
        ref={ref}
        placeholder={placeholder}
    />));

export default CustomedInput