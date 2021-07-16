import React from 'react';
import '../assets/css/Search.scss';
import { SearchBox } from './SearchBox';
import logo from '../assets/img/Logo_ML.png';
import history from "../service/history";

const Search = ({
  selectedSearch
}) => {
  return (
    <header className="Header">
      <img
        className="logo_mercadolibre"
        src={ logo }
        alt="Mercado Libre logo"
        onClick={() => history.push({ pathname : '/items', itemId : null }) }
      />
      <SearchBox
        selected={selectedSearch}
      />
  </header>
  );
}
export { Search };
