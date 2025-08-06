// CSS imports

import { Icon } from '@iconify-icon/react';
import { deletingAnItem, updatingAnItem } from '../services/dbRetrievingData';
import { formatPrice } from '../data/data';
import { toast } from 'react-toastify';

// React imports
import { useRef, useState, useEffect,  } from 'react';


//Dependencies imports


// My components imports
import ItemButton from './itemButton';

// COMPONENT: InventoryItem
// DESCRIPTION: Shows iventory data in cards-like.
// PROPS: deleteItem, updateItem, description, price, date, category, id
// CREATED: [Date you made it]
const InventoryItem = ({ description, price, date, category, id }) => {
  

  // 🔔 - Notifications-type definitions - 🔔
  // Item updated successfully ✅
  const notifyItemUpdated = () => toast.success("Item updated successfully");
  // Part of the update item notifications
  const notifyNothingChanged = () => toast.info("Nothing changed, no need to update the item 🫡");
  // Notifying the user that the item could not be updated
  const notifyItemUpdatedError = () => toast.error("Item culdtNot be updated, please try again later");

  // 🗑️🔔 Delete item notifications 🗑️🔔
  // Item deleted successfully ✅
  const notifyDelete = () => toast.success("Item deleted successfully");
  const notifyDeleteError = () => toast.error("Item not deleted, please try again later");

  // ================= References to the table elements ================= //
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  // const categoryRef = useRef(null);
  // === The item data as soon as it is created === //
  // Was the element really changed? if not it'll stop the app 
  // from sending requests to the db in vain. 😊💪
  const [anythingChanged, setAnyThingChanged] = useState({})
  useEffect(()=>{
    setAnyThingChanged({
      price: priceRef.current?.innerText,
      description: descriptionRef.current?.innerText,
      //   ${categoryRef.current?.innerText}
      date: dateRef.current?.innerText
    })
  }, [])

//Object to compare with the "updated data in the item", if nothing is different 
//It shouldn't waste resources and make a request to de db in vain or unnecessary
const compareTheUpdatedData = updatedData =>{
  const dataBefore = anythingChanged;  
  if (dataBefore.description.trim() === updatedData.description.trim() && 
      dataBefore.price.trim() === updatedData.price.trim() && 
      dataBefore.date.trim() === updatedData.date.trim()) {
    return true;
  } 
  else {
    return false;
  }
}

// Toggles the button eddit/update
  const [ isUpdating, setIsUpdating ] = useState(false);  
  const handleUpdate = () => {
    setIsUpdating(!isUpdating);
  }

  // ==================== toggling Elements to editable ====================
  const toggleEditable = () => {
    if (isUpdating == false) { 
      descriptionRef.current.contentEditable = true
      priceRef.current.contentEditable = true
      // categoryRef.current.contentEditable = true
      dateRef.current.contentEditable = true
    }
    else {
      descriptionRef.current.contentEditable = false
      priceRef.current.contentEditable = false
      // categoryRef.current.contentEditable = false
      dateRef.current.contentEditable = false
    }
  }

  // =================== This'll handle the update of the item on the DB ====================

  // ==================== This'll be run when the edit button in clicked ====================
  const toggleToUpdate = () =>{
    // Set the button to update
    handleUpdate();
    // Set the content to editable on the items
    toggleEditable();
  }

// =================== UPDATES THE DATA ON THE DB ====================
  const updateItemOnDB = () =>{ 
    const updatedData = {
      price: priceRef.current?.innerText,
      description: descriptionRef.current?.innerText,
      date: dateRef.current?.innerText

    }
    // Notifying the data to be updated
    if(compareTheUpdatedData(updatedData)){
      notifyNothingChanged(); // Notify the user that nothing changed
    }else{
      updatingAnItem(id, updatedData)
      .then(() => {
        notifyItemUpdated(); // Notify the user that the item was updated successfully
      })
      .catch((error) => {
        console.error("Error updating item: ", error);
        notifyItemUpdatedError(); // Notify the user that there was an error updating the item
      });
    }
    
    // After updating the item, wee'll
    
      // 1 -> Toggle the item back to editting
      handleUpdate();
      // 2 -> Toggle the data to not editable
      toggleEditable(); // == Set the contentEditable to false ==
      // == Set the contentEditable to false == 
      // console.log("Item updated successfully", updatedData);
  }

// =================== This'll delete the item from the DB ====================
  const deletingAnItemFunc = () => {
    deletingAnItem(id)
      .then(() => {
        notifyDelete(); // Notify the user that the item was deleted successfully
        console.log('This item has been deleted successfully:', id);
      })
      .catch((error) => {
        notifyDeleteError(); // Notify the user that there was an error deleting the item
        console.error("Error deleting item: ", error);
      });
  }//==<> 

  // Cleaning the description length
  // If the description is too long, it will be shortened to 50 characters and added the "..." at the end.
  const cleanDescription = (description) => {
    if (description.length > 20) {
      return description.slice(0, 20) + '...';
    }else{
      return description;
    }
  } // ==<> 
  


  // Button component configs
  const buttonConfig = {
    DELETE: {text: 'Delete', type: 'delete', color: 'red', icon: 'material-symbols-light:delete-outline',
      functionality: deletingAnItemFunc
    },
    UPDATE: {text: 'Update', type: 'update', color: 'blue', icon: 'material-symbols-light:edit-arrow-up-outline-rounded',
      functionality: updateItemOnDB},

    EDIT: {text: 'Edit', type: 'update', color: 'blue', icon: 'material-symbols-light:edit-arrow-up-outline-rounded',
      functionality: toggleToUpdate}
  }

  // ==================== Component body ====================
  return ( 
    <div className = 'inventory-Item'>

        {/* TOP ROW */}
        <div className = "item-row item-top_row">
          <div 
          className = "item-row_child" 
          ref = { descriptionRef }
          >
            {/* Icon */}
            <Icon icon="material-symbols:description-outline" 
            className='icon-settings'/>
            {/* Text */}
            <span className='desc-txt fs-1 txt-bold'> 
              { cleanDescription(description) } 
            </span>
          </div>

          <div className = "item-row_child item-price" ref = { priceRef }>
            {/* Icon */}
            <Icon icon="material-symbols-light:attach-money" 
            className='icon-settings'/>
            {/* Price 💵 */}
            { formatPrice(price) }
          </div>
        </div>

      {/* Center Row */}
        <div className="item-row inventoryItem-center_row">
          <span  ref = { dateRef }>
            <Icon icon="material-symbols-light:date-range" 
            className='icon-settings'/>
            { date }
          </span>
          <span className = "" > 
            { category }
          </span>
        </div>


        {/* ============ This one contains the buttons ============ */}
        <div className = 'item-row inventoryItem-bottom_row'>
          {/* Delete Component */}
            <ItemButton
              ButtonType = {buttonConfig.DELETE.text}
              buttonIcon = {buttonConfig.DELETE.icon}
              myFunction = {buttonConfig.DELETE.functionality}
            />

              {/* Edit/update button ✏️ */}
              
              {
              isUpdating ? (
            <ItemButton 
              ButtonType = {buttonConfig.UPDATE.text}
              buttonIcon = {buttonConfig.UPDATE.icon}
              myFunction = {buttonConfig.UPDATE.functionality}
            />
              ) : (
                // `This only executes the toggle to update and then
                // turns the items to content editable. 
            <ItemButton
              ButtonType = {buttonConfig.EDIT.text}
              buttonIcon = {buttonConfig.EDIT.icon}
              myFunction = {buttonConfig.EDIT.functionality}
            />
            )   
            }
          </div>
      </div>
  );
}

export default InventoryItem;

// The properties for the button component are:
// The function exceuted then the onclick is fired.
