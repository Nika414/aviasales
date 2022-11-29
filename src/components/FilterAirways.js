import { useSelector } from 'react-redux';
import FilterBarVertical from './FilterBarVertical';
import AirwaysOption from './AirwaysOptions';

export default function FilterAirways({ text }) {
  const companies = useSelector((state) => state.companies.companies);
  const generateKey = (name) => `${name}_${new Date().getTime()}`

  return (
    <FilterBarVertical text={text} selector='filter-bar-vertical__container_place_filter-airways'>
      <label htmlFor="all-airways" className="form__label from__label_place_filter-airways">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-airways"
          id="all-airways"
        />
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-airways" />
        <span className="form__text">Все</span>
      </label>
      {companies !== undefined && companies.map((company) => (<AirwaysOption key={generateKey(company.name)} company={company.name} />))}

    </FilterBarVertical>
  );
}
