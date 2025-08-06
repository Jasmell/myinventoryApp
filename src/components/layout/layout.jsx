// CSS imports
import './layoutMain.css';
import './exlScreen.css';
import './largeScreen.css';
import './smallScreen.css';
import './midScreen.css';
import './superLargeScreen.css';

// React imports
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../jsmodules.js/context';

//Dependencies imports

// My components imports
import SidebarMenu from './sidebarMenu.jsx';
import Header from './header.jsx';
import InventoryView  from '../../inventoryComponents/inventoryView.jsx';
// import AddUpdateForm from '../../forms/addUpdateForm.jsx';
// import CurrentFilterTotal from '../../inventoryComponents/currentFilterTotal.jsx';

const LayOut =()=> {

  // Statuses 
  const {data } = useContext(Context);
  const [t, setT] = useState(0);


  // The total of the filtered items, and it will be used to show the total of the filtered items.
  let total = 0;
  for(let i = 0; i < data.length; i++){
    // NOTE: figure out how does reduce works, and how to use it to get the total of the filtered items.
    total+= data[i];
  }

  useEffect(() => {
    setT(total);
  }, [data]);
  // This'll set the data in the context, and will be used to show the data in the filter component.


  

  // ==================== Component body ====================
return ( 
<>
  {/* col 1-->> */}
  <main className = "layout-main" >

    {/* SIDEBAR MENU */}
    <SidebarMenu/>

    <div className='right-column'>
      {/* HEADER */}
      <Header />
      <div className="row mid-panel_totals">

      
      {/* COMPONENT: CurrentFilter-Total */}   
      {/* DESCRIPTION: Shows all the total of the currently filtered Inventory Items */}
      {/* PROPS: [List props and important behaviors] */}
      {/* CREATED: [Date you made it] */}
      {/* <CurrentFilterTotal /> */}
      <div className="stats-item">
        <span className='stats-item'>
          <span className="total-spent_ttl">
            To<br/>Tal
          </span>
          <span className='totals-amount'>
            {t.toFixed(2)}
          </span>
        </span>
        {/* <span className='totals-text'>0.00</span> */}
      </div>

      <div className="stats-item"></div>
      <div className="stats-item"></div>
      </div>

      <div className='row row-ItemsView'>

      {/* COMPONENT: [ComponentName] */}
      {/* DESCRIPTION: [What this component does] */}
      {/* PROPS: [List props and important behaviors] */}
      {/* CREATED: [Date you made it] */}
      <InventoryView />
    
      {/* CREATED: [Date you made it] */}
      </div>
    </div>
  </main> {/* ==<>*/}
</>
  );
}

export default LayOut;