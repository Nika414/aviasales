import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { getTickets } from '../store/ticketsSlice'
import Main from './Main';
import SearchBar from './SearchBar'
import { getCompanies } from '../store/companiesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
    dispatch(getTickets());
  }, [dispatch])


  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Main />
    </div>
  );
}

export default App;
