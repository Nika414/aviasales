import { useSelector } from 'react-redux';
import FilterBarVertical from './FilterBarVertical';
import TransferOption from './TransferOption';

export default function FilterTransfer({ text }) {
  const tickets = useSelector((state) => state.tickets.tickets);
  const generateKey = (transfers) => `${transfers}_${new Date().getTime()}`
  let transfers;
  if (tickets !== undefined) {
    transfers = tickets.map((item) => item.info.stops.length)
  }
  const transfersWithoutDubles = Array.from(new Set(transfers)).sort();

  return (
    <FilterBarVertical text={text}>
      {transfersWithoutDubles.map((item) => (<TransferOption key={generateKey(item)} transfers={item} id={generateKey(item)} />))}
    </FilterBarVertical>
  );
}
