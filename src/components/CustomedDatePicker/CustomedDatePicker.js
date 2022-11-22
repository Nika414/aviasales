/* eslint-disable react/no-unstable-nested-components */

import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import 'react-datepicker/dist/react-datepicker.css';

setDefaultOptions({ locale: ru })

export default function CustomedDatePicker({ lastOne, placeholder }) {
    const [startDate, setStartDate] = useState(null);
    const days = [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб'
    ];
    const date = new Date();
    const weekDay = date.getDay();

    const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
        <input
            value={value}
            className={`react-datepicker___custom-input ${lastOne && 'react-datepicker___custom-input_place_last'}`}
            onClick={onClick}
            onChange={onChange}
            ref={ref}
            placeholder={placeholder}
            
        />));
    return (
        <DatePicker wrapperClassName="date-picker__wrapper"
            showPopperArrow={false}
            selected={startDate}
            onChange={() => setStartDate(date)}
            dateFormat={`dd MMMM, ${days[weekDay]}`}
            customInput={<CustomInput />}
            minDate={startDate}       
        />
    );
};

