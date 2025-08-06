// CSS imports
import './style.search.css';

// React imports
//Dependencies imports
// My components imports
import { Icon } from '@iconify-icon/react';

const SearchBar = () => {
  return ( 
  <div className="searchBar">
    <Icon icon="oui:app-search-profiler" width="32" height="32" className=''/>
    <input type="text" />
  </div> );
}

export default SearchBar;