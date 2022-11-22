import FilterBarVertical from './FilterBarVertical';
import TransferOption from './TransferOption';

export default function FilterTransfer({ text, tickets }) {
let transfers;
 if (tickets.data !== undefined) {
 transfers = tickets.data.map((item) =>  item.info.stops.length ) }
 const transfersWithoutDubles = Array.from(new Set(transfers)).sort();
 
  return (
    <FilterBarVertical text={text}>
      {transfersWithoutDubles.map((item) => (<TransferOption key={Math.floor(Math.random() * 1000)} transfers={item} />))}
    </FilterBarVertical>
  );
}
