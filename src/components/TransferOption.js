/* eslint-disable jsx-a11y/label-has-associated-control */

export default function TransferOption({transfers}) {
    return(
        <label className="form__label from__label_place_filter-transfer">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-transfer"
          id="without-transfer"
         />
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-transfer" />
        <span className="form__text">{transfers===0 ? 'Без пересадок' 
        : transfers === 1 ? '1 пересадка' 
        : transfers >1 && transfers < 5 ? `${transfers} пересадки`
        : transfers > 4 && `${transfers} пересадок` }</span>
      </label>
    )
}