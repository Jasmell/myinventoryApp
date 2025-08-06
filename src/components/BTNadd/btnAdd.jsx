// CSS imports
import './btnAdd.css';

// React imports
import { useState, useRef } from 'react';

//Dependencies imports
import { Icon } from '@iconify-icon/react';

// My components imports

//Dependencies imports

// Component main Function
const BtnAdd = ( {switchFrmStatus} ) => {
  
  const [ iconState, setIconState ] = useState(true);
  const iconRef = useRef(null);

  // Manages the animation for the addItem btn.
  const rotateIcon = () =>{
    // If true when clicked, change the state to false.
    let iconClasses = iconRef.current.classList.value; 
    let iconCL = iconRef.current.classList; 
    let riF = "rotateIconForwards";
    let riB = "rotateIconBackwards";

      if(iconClasses.indexOf(riF) === -1)
      {
        iconCL.add(riF);
      }
      else if(iconClasses.indexOf(riF) > -1 && iconClasses.indexOf(riB) > -1){
        iconCL.remove(riF);
        iconCL.remove(riB);
        iconCL.add(riF);
      }
      else{iconCL.add(riB)}

      setIconState(!iconState)

    switchFrmStatus();
  }

  return ( 
    <button 
      type={ `button`} 
      className="button br-16" 
      onClick={rotateIcon} > 
        <Icon icon="material-symbols-light:add-2-rounded" width="24" height="24" className='rBackwards  btnIcon' ref={iconRef}/>
      </button>  
  )
}

export default BtnAdd;