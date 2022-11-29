import { useSelector } from 'react-redux';
import FilterTransfer from './FilterTransfer';
import FilterAirways from './FilterAirways';

export default function Filters() {
  const tickets = useSelector((state) => state.tickets.tickets);
  const companies = useSelector((state) => state.companies.companies);
  
  return (
    <div className="filters">
      <FilterTransfer text="КОЛИЧЕСТВО ПЕРЕСАДОК" tickets={tickets}/>
      <FilterAirways text="компания" companies={companies} />
    </div>
  );
}
