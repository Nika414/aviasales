/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import DataListInput from 'react-datalist-input';
import CityOption from './CityOption';
import CustomedDatePicker from './CustomedDatePicker/CustomedDatePicker';


export default function SearchBar() {
    const tickets = useSelector((state) => state.tickets.tickets);

    const itemsOrigin = tickets.map((ticket) => ({
        id: ticket.info.origin,
        value: ticket.info.origin,
    }));

    const itemsDestination = tickets.map((ticket) => ({
        id: ticket.info.destination,
        value: ticket.info.destination,
    }));

    const originItemsWithoutDoubles = itemsOrigin.reduce((r, i) =>
        !r.some(j => !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r
        , [])

    const destinationItemsWithoutDoubles = itemsDestination.reduce((r, i) =>
        !r.some(j => !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r
        , [])

    return (
        <div className="search-bar-form">
            <div className='search-bar-form__wrapper'>
                <DataListInput type="text"
                    className="react-datalist-input__container_place_first"
                    placeholder='Откуда'
                    id="from" items={originItemsWithoutDoubles} />
                <button type="button" className='search-bar-form__change-button'>
                    <svg className='search-bar-form__change-button-arrow' width="13" height="6" viewBox="0 0 13 6" xmlns="http://www.w3.org/2000/svg">
                        <path className='search-bar-form__change-button-arrow' d="M3 3.5H2.5V4V4.79289L0.707107 3L2.5 1.20711V2V2.5H3H12.5V3.5H3Z" stroke="#2196F3" />
                    </svg>
                    <svg className='search-bar-form__change-button-arrow' width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='search-bar-form__change-button-arrow' d="M10 2.5H10.5V2V1.20711L12.2929 3L10.5 4.79289V4V3.5H10L0.5 3.5V2.5L10 2.5Z" stroke="#2196F3" />
                    </svg>
                </button>
            </div>
            <div className='search-bar-form__wrapper'>
                <DataListInput type="text"
                    className="react-datalist-input__container_place_second"
                    placeholder='Куда'
                    id="where" items={destinationItemsWithoutDoubles} />
            </div>
            <CustomedDatePicker placeholder='Когда' />
            <CustomedDatePicker placeholder='Обратно' lastOne />
        </div >
    );
}
