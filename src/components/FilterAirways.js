/* eslint-disable jsx-a11y/label-has-associated-control */
import FilterBarVertical from './FilterBarVertical';
import AirwaysOption from './AirwaysOptions';

export default function FilterAirways({text, companies}) {

  return (
    <FilterBarVertical text={text} selector='filter-bar-vertical__container_place_filter-airways'>
      <label className="form__label from__label_place_filter-airways">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-airways"
          id="without-transfer"
         />
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-airways" />
        <span className="form__text">Все</span>
      </label>
      {companies.data !== undefined && companies.data.map((company) => (<AirwaysOption key={Math.floor(Math.random() * 1000)} company={company.name} />))}

    </FilterBarVertical>
  );
}
