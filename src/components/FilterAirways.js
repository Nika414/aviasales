import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import FilterBarVertical from './FilterBarVertical';
import AirwaysOption from './AirwaysOptions';
import { setAllCompanies, removeAllCompanies } from '../store/filterTicketsSlice';

export default function FilterAirways({ text }) {
  const companies = useSelector((state) => state.companies.companies);
  const generateKey = (name) => `${name}_${new Date().getTime()}`
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const companiesState = useSelector(state => state.filterTickets.filterCompanies)
  const companyIdArr = companies.map((item) => item.id)

  function handleCompanyClick() {
    setChecked(!checked);
    if (companiesState.toString() === companyIdArr.toString()) {
      dispatch(removeAllCompanies([]));
    } else {
      setChecked(!checked);
      dispatch(setAllCompanies(companyIdArr));
    }

  }

  return (
    <FilterBarVertical text={text} selector='filter-bar-vertical__container_place_filter-airways'>
      <label htmlFor="all-airways" className="form__label from__label_place_filter-airways">
        <input onClick={handleCompanyClick}
          type="checkbox"
          className={`form__checkbox form__checkbox_place_filter-airways ${checked && 'form__checkbox_checked'}`}
          id="all-airways"
        />
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-airways" />
        <span className="form__text">Все</span>
      </label>
      {companies !== undefined && companies.map((company) => (<AirwaysOption key={generateKey(company.name)} company={company} />))}

    </FilterBarVertical>
  );
}
