import './form.css'
import { Icon } from '@iconify-icon/react';
import { useState, useRef } from 'react';
import CategorySelect from './CategorySelect';
import { addingAnItem } from '../services/dbRetrievingData';
import { v4 as uuidv4 } from 'uuid';
import { currentDate } from '../data/data';
import { toast } from 'react-toastify';

function AddUpdateForm({ frmStatus, switchFrmStatus }) {
  // References
  const frmRef = useRef(0);
  const classesRef = frmRef.current?.classList;
  
  if(frmStatus){
    classesRef?.remove("hideMe");
  }else{
    classesRef?.add("hideMe");    
  }
  // frmRef.style.display = "flex";

  // 🔔 - Notifications-type definitions - 🔔
  // Notifying the user that the item was added successfully ✅
  const notifyAddItem = itemShortDescription => toast.success(`You've added ${itemShortDescription}`);

  //If eny error occurs, notify the user that the item could not be added ❌
  const notifyItemNotAdded =()=> toast.error('The item could not be added, try again');
  
  // Handling the state of the inputs, and setting the data in the state.
  // =================================================================================
  // Holds the inputs values dinamically(Computed inputs)
  const [input, setInput] = useState({
    description:"",
    price:"",
    category:"",
    status:""//This'll be used to set one of three states: bought(green), paying(red),wish(opaque blue).
    
  });

  const handleInputs = e => {
    e.preventDefault();
    // This'll set the data in the state, and will be used to create the items in the database
    setInput(prevState =>({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  // =================================================================================
  // Here I'll create the function to handle the submit of the form, and it'll be used to add the new items to the database.
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(input.category);
    // Preventing the user from sending the data with the default value of the select element.
    if (input.category === "👉🏾 Select a category" || input.category === "") {
      alert("Please select a category");
      return;
    }
    // Adding the new item to the database, and passing the data from the state to the function.
    addingAnItem(
      {
        description: input.description,
        price: parseFloat(input.price),
        category: input.category,
        currentDate: currentDate,
        SKU: `SKU-${uuidv4().slice(0,6)}`
      })
        // Clear the input after the submit
        setInput({
          "description": "",
          "price": "",
          "category": ""
      })
      setInput(prevState => ({
        ...prevState,
        category: "👉🏾 Select a category"
      }));

    // Notifying the user that the item was added successfully ✅
      notifyAddItem(input.description);
      // Hiding the form after the submit
      switchFrmStatus();
  }

  // ==================== Component body ====================
  return (

    <form onSubmit={ handleSubmit }
    className='frm-itemCreator yes' ref = {frmRef}>
      <div className='flex'></div>
      <p className='title'>Add an item</p>
      <label>
        <input className="input" type="text" name='description' value={input.description} onChange = {handleInputs} placeholder='Description' required />
        <span>Description</span>
      </label>


        {/* The price input $RDs 💰*/}
      <label>
        <input className="input" type="number" name='price' value={input.price} placeholder='Price'
        onChange = {handleInputs} required />
        <span>Price</span>
      </label>

      {/* This is the select Element, to select the categories of the expenses */}

      <CategorySelect className="input category" categorySetter = { setInput } inputData = {input}
      defaultValue = "👉🏾 Select a category"
      />
      {/* The submit button, which'll add the new elements to the inventory */}
      <button type = "submit" className= "submit" >
        <Icon icon = "mdi:add" width = "24" height = "24" />
      </button>
    </form>
    // </StyledWrapper>

    );
}

export default AddUpdateForm;