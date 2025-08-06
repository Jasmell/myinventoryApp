import { useContext } from 'react';
import { Context } from '../jsmodules.js/context';
import './expensesFilter.css';
import { formatPrice } from '../data/data';

const CurrentFilterTotal = () => {
  // Retrieving the data from the context, and setting the data in the state.
  const { data } = useContext(Context);
  let total = 0;
  // This is doing the sum
  for(let i = 0; i < data.length; i++){
    total += data[i];
  }

  // ==================== Component body ====================
  return ( 
  <div className="currentFilterTotal">
    <h2>Total Spent On</h2>
    <h3 className="filteredTotal">
      { formatPrice(total) }
    </h3>
  </div> 
  );
}

export default CurrentFilterTotal;