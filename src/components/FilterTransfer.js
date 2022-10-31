import FilterBarVertical from "./FilterBarVertical";

export default function FilterTransfer() {
  return (
    <FilterBarVertical text="КОЛИЧЕСТВО ПЕРЕСАДОК">
      <label className="form__label from__label_place_filter-transfer">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-transfer"
          id="without-transfer"
        ></input>
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-transfer"></span>
        <span className="form__text">без пересадки</span>
      </label>
      <label className="form__label from__label_place_filter-transfer">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-transfer"
          id="one-transfer"
        ></input>
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-transfer"></span>
        <span className="form__text">1 пересадка</span>
      </label>
      <label className="form__label from__label_place_filter-transfer">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-transfer"
          id="two-transfer"
        ></input>
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-transfer"></span>
        <span className="form__text">2 пересадки</span>
      </label>
      <label className="form__label from__label_place_filter-transfer">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-transfer"
          id="three-transfer"
        ></input>
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-transfer"></span>
        <span className="form__text">3 пересадки</span>
      </label>
    </FilterBarVertical>
  );
}
