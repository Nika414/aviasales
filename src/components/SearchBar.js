import CustomedDatePicker from './CustomedDatePicker/CustomedDatePicker';

export default function SearchBar() {
    return (
        <div className="search-bar-form">
            <label htmlFor="from" className="search-bar-form__label">
                <input
                    type="text"
                    className="search-bar-form__input"
                    placeholder='откуда'
                    id="from"
                />
                <button type="button" className='search-bar-form__change-button'>
                    <svg className='search-bar-form__change-button-arrow' width="13" height="6" viewBox="0 0 13 6" xmlns="http://www.w3.org/2000/svg">
                        <path className='search-bar-form__change-button-arrow' d="M3 3.5H2.5V4V4.79289L0.707107 3L2.5 1.20711V2V2.5H3H12.5V3.5H3Z" stroke="#2196F3" />
                    </svg>
                    <svg className='search-bar-form__change-button-arrow' width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='search-bar-form__change-button-arrow' d="M10 2.5H10.5V2V1.20711L12.2929 3L10.5 4.79289V4V3.5H10L0.5 3.5V2.5L10 2.5Z" stroke="#2196F3" />
                    </svg>
                </button>
            </label>
            <label htmlFor="where" className="search-bar-form__label">
                <input
                    type="text"
                    className="search-bar-form__input"
                    placeholder='куда'
                    id="where"
                 />
            </label>
            <CustomedDatePicker placeholder='Когда'  />
            <CustomedDatePicker placeholder='Обратно' lastOne/>
        </div>
    );
}
