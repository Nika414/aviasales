import FilterTransfer from "./FilterTransfer";
import FilterAirways from "./FilterAirways";

export default function Filters() {
  return (
    <div className="filters">
      <FilterTransfer text="КОЛИЧЕСТВО ПЕРЕСАДОК" />
      <FilterAirways text="компания" />
    </div>
  );
}
