import $ from 'jquery';
import arrowLeft from '../images/arrow-left.svg';
import arrowRight from '../images/arrow-right.svg'



$(function () {

})


export default function SearchBar() {
    return (
        <div className="search-bar-form">
            <label className="search-bar-form__label">
                <input
                    type="text"
                    className="search-bar-form__input"
                    placeholder='откуда'
                /><button className='search-bar-form__change-button'>
                    <img className='search-bar-form__change-button-arrow' src={arrowLeft} alt='Поменять местами' />
                    <img className='search-bar-form__change-button-arrow' src={arrowRight} alt='Поменять местами' />

                </button>
            </label>
            <label className="search-bar-form__label">
                <input
                    type="text"
                    className="search-bar-form__input"
                    placeholder='куда'
                ></input>
            </label>
            <label className="search-bar-form__label">
                <input
                    type="text"
                    className="search-bar-form__input"
                    placeholder='когда'
                ></input>
            </label>
            <label className="search-bar-form__label">
                <input
                    type="text"
                    className="search-bar-form__input"
                    placeholder='обратно'
                ></input>
            </label>
        </div>
    );
}
