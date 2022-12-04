/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';
import FilterBarHorizontal from './FilterBarHorizontal';
import Filters from './Filters';
import Card from './Card';
import S7Logo from '../images/S7Logo.png';
import ButtonShowMore from './ButtonShowMore';
import { setFilteredTickets } from '../store/filterTicketsSlice'
import XiamenAir from '../images/XiamenAirLogo.png'
import Loader from './Loader';

Moment.globalFormat = 'hh:mm';

export default function Main() {
  const [visible, setVisible] = useState(5);
  const isLoaded = useSelector(state => state.tickets.loaded)

  const method = useSelector(state => state.filterTickets.filterSorting);
  const primaryTickets = useSelector(state =>
    state.tickets.tickets
      .filter((ticket) => {
        let result = true;
        result = (ticket.info.origin.startsWith(state.searchTickets.searchOrigin)) &&
          (ticket.info.destination.startsWith(state.searchTickets.searchDestination));

        if (result && state.filterTickets.filterTransfers.length) {
          result = state.filterTickets.filterTransfers.includes(ticket.info.stops.length)
        }
        if (result && state.filterTickets.filterCompanies.length) {
          result = state.filterTickets.filterCompanies.includes(ticket.companyId)
        }

        return result;
      }));

  const tickets = handleSorting(primaryTickets);

  function handleSorting(ticketsForSort) {
    let filteredItems;
    if (method === 'cheapest') {
      filteredItems = ticketsForSort.sort((a, b) => Number(a.price) - Number(b.price));
    } if (method === 'fastest') {
      filteredItems = ticketsForSort.sort((a, b) => Number(a.info.duration) - Number(b.info.duration));
    } if (method === 'optimal') {
      filteredItems = ticketsForSort.sort((a, b) => a.info.stops.length - b.info.stops.length)
    }
    return filteredItems;
  }

  function handleMoreTickets() {
    setVisible((prevValue) => prevValue + 5)
  }

  return (
    <main className="main">
      <Filters />
      <div className="main__container">
        <FilterBarHorizontal />
        {tickets !== undefined && tickets.slice(0, visible).map((ticket) =>
        (<Card key={ticket.id} price={`${ticket.price} Р `}
          destination={`${ticket.info.origin}-${ticket.info.destination}`}
          transfer={ticket.info.stops.length === 0 ? 'Без пересадок'
            : ticket.info.stops.length === 1
              ? '1 пересадка' : `${ticket.info.stops.length} пересадки`}
          transferDestination={ticket.info.stops}
          timeStart={<Moment unix>{ticket.info.dateStart}</Moment>}
          timeEnd={<Moment unix>{ticket.info.dateEnd}</Moment>}
          timingSum={`${Math.floor((ticket.info.duration / (1000 * 60 * 60)) % 24)}ч ${Math.floor((ticket.info.duration / (1000 * 60)) % 60)}м`}
          companyLogo={ticket.companyId === '7dc12d0b-ce42-48a0-8673-0dad4d698764' ? XiamenAir : S7Logo} />))}
        {isLoaded === false && (<Loader />)}
        {isLoaded && (<ButtonShowMore onClick={handleMoreTickets} tickets="5" />)}
      </div>
    </main>
  );
}
