/* eslint-disable react/no-unstable-nested-components */

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';
import setDefaultOptions from 'date-fns/setDefaultOptions';
import 'react-datepicker/dist/react-datepicker.css';
import CustomedInput from './CustomedInput'

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
    const currentDate = new Date();
    const weekDay = currentDate.getDay();


    return (
        <DatePicker wrapperClassName="date-picker__wrapper"
            placeholderText={placeholder}
            showPopperArrow={false}
            onChange={(date) => setStartDate(date)}
            dateFormat={`dd MMMM, ${days[weekDay]}`}
            selected={startDate}
            customInput={<CustomedInput lastOne={lastOne} />}
            minDate={currentDate}

        />
    );
};

