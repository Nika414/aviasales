import FilterBarVertical from "./FilterBarVertical";

export default function FilterTransfer() {
  return (
    <FilterBarVertical text="КОЛИЧЕСТВО ПЕРЕСАДОК">
      <label className="form__label">
        <input
          type="checkbox"
          className="form__checkbox"
          id="without-transfer"
        ></input>
        <span className="form__customized-checkbox"></span>
        <span className="form__text">без пересадки</span>
      </label>
      <label className="form__label">
        <input
          type="checkbox"
          className="form__checkbox"
          id="one-transfer"
        ></input>
        <span className="form__customized-checkbox"></span>
        <span className="form__text">1 пересадка</span>
      </label>
      <label className="form__label">
        <input
          type="checkbox"
          className="form__checkbox"
          id="two-transfer"
        ></input>
        <span className="form__customized-checkbox"></span>
        <span className="form__text">2 пересадки</span>
      </label>
      <label className="form__label">
        <input
          type="checkbox"
          className="form__checkbox"
          id="three-transfer"
        ></input>
        <span className="form__customized-checkbox"></span>
        <span className="form__text">3 пересадки</span>
      </label>
    </FilterBarVertical>
  );
}
