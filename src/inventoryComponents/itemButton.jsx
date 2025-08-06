// CSS imports


// React imports


//Dependencies imports
import { Icon } from '@iconify-icon/react';


// My components imports


const ItemButton = ({ myFunction, ButtonType, buttonIcon }) => {

  return ( 
  <>
    <button 
    onClick={() => myFunction()} // Wrap in an anonymous function
      className="btn-item"  
      type = "button">
      {ButtonType}
    <Icon icon = {buttonIcon} width="24" height="24" />
    </button> 
  </> );
}

export default ItemButton;