/* eslint-disable no-debugger */
import React, { useState } from 'react';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import FilterBarHorizontal from './FilterBarHorizontal';
import Filters from './Filters';
import Card from './Card';
import S7Logo from '../images/S7Logo.png';
import ButtonShowMore from './ButtonShowMore';

import XiamenAir from '../images/XiamenAirLogo.png'

Moment.globalFormat = 'hh:mm';

export default function Main() {
  const [visible, setVisible] = useState(5);

  const tickets = useSelector(state =>
    state.tickets.tickets
      .filter((ticket) =>
        (ticket.info.origin.startsWith(state.searchTickets.searchOrigin)) &&
        (ticket.info.destination.startsWith(state.searchTickets.searchDestination))));

  function handleMoreTickets() {
    console.log('djdjdjd')
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
        <ButtonShowMore onClick={handleMoreTickets} tickets="5" />
      </div>
    </main>
  );
}
