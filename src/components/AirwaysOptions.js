/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCompany, removeCompany } from '../store/filterTicketsSlice';

export default function AirwaysOption({ company }) {

  const [checked, setChecked] = useState(false);
  const companiesState = useSelector(state => state.filterTickets.filterCompanies)
  const dispatch = useDispatch();

  function handleCompanyClick() {
    setChecked(prev => !prev);
    if (companiesState.includes(company.id)) {
    dispatch(removeCompany(company.id))
    } else {setChecked(!checked);
      dispatch(setCompany(company.id))}
   
  }

  return (
    <label htmlFor={company.id} className='form__label from__label_place_filter-airways'>
      <input
        onClick={handleCompanyClick}
        type="checkbox"
        className={`form__checkbox form__checkbox_place_filter-airways ${checked && 'form__checkbox_checked'}`}
        id={company.id}
      />
      <span className="form__customized-checkbox form__customized-checkbox_place_filter-airways" />
      <span className="form__text">{company.name}</span>
    </label>
  )
}