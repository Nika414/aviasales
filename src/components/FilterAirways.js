import FilterBarVertical from "./FilterBarVertical";

export default function FilterAirways({text}) {
  return (
    <FilterBarVertical text={text} selector='filter-bar-vertical__container_place_filter-airways'>
      <label className="form__label from__label_place_filter-airways">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-airways"
          id="without-transfer"
        ></input>
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-airways"></span>
        <span className="form__text">Все</span>
      </label>
      <label className="form__label from__label_place_filter-airways">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-airways"
          id="one-transfer"
        ></input>
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-airways"></span>
        <span className="form__text">S7 Airlines</span>
      </label>
      <label className="form__label from__label_place_filter-airways">
        <input
          type="checkbox"
          className="form__checkbox form__checkbox_place_filter-airways"
          id="two-transfer"
        ></input>
        <span className="form__customized-checkbox form__customized-checkbox_place_filter-airways"></span>
        <span className="form__text">XiamenAir</span>
      </label>

    </FilterBarVertical>
  );
}
