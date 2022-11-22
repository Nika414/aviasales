/* eslint-disable jsx-a11y/label-has-associated-control */
export default function AirwaysOption({company}) {
    return(
        <label className="form__label from__label_place_filter-airways">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-airways"
          id={company.id}
         />
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-airways" />
        <span className="form__text">{company}</span>
      </label>
    )
}