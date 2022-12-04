/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTransfer, removeTransfer } from '../store/filterTicketsSlice';

export default function TransferOption({ id, transfers }) {
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch();
  const transfersState = useSelector(state => state.filterTickets.filterTransfers)
  
  function handleTransferClick() {
    if (transfersState.includes(transfers)) {
      dispatch(removeTransfer(transfers));
    } else {
      dispatch(setTransfer(transfers))}
      setChecked(!checked);
  }


  return (
    <label htmlFor={id} className="form__label from__label_place_filter-transfer">
      <input onClick={handleTransferClick}
        type="checkbox"
        className={`form__checkbox form__checkbox_place_filter-transfer ${checked ? 'form__checkbox_checked' : ''}`}
        id={id}
      />
      <span className="form__customized-checkbox form__customized-checkbox_place_filter-transfer" />
      <span className="form__text">{transfers === 0 ? 'Без пересадок'
        : transfers === 1 ? '1 пересадка'
          : transfers > 1 && transfers < 5 ? `${transfers} пересадки`
            : transfers > 4 && `${transfers} пересадок`}</span>
    </label>
  )
}