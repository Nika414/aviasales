import FilterTransfer from './FilterTransfer';
import FilterAirways from './FilterAirways';

export default function Filters({companies, tickets}) {
  return (
    <div className="filters">
      <FilterTransfer text="КОЛИЧЕСТВО ПЕРЕСАДОК" tickets={tickets}/>
      <FilterAirways text="компания" companies={companies} />
    </div>
  );
}
