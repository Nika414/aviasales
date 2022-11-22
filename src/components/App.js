import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import SearchBar from './SearchBar'

function App() {
  const [companies, setCompanies] = useState({});
  const [tickets, setTickets] = useState({});

  useEffect(() => {
    Promise.all([axios.get('https://api.npoint.io/a1b1c28b32d9785bb26c'),
    axios.get('https://api.npoint.io/163b5e66df9f2741243e')]).then(([companiesData, ticketsData]) => {
      setCompanies(companiesData);
      setTickets(ticketsData);
    })
  }, [])


  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Main companies={companies} tickets={tickets}/>
    </div>
  );
}

export default App;
