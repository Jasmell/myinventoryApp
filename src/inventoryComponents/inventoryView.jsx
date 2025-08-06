// ================= IMPORTS =================
import InventoryItem from "./InventoryItem";
import { useState, useEffect, useContext } from "react";
import { collectionRef } from "../services/dbRetrievingData";
import { onSnapshot } from "firebase/firestore";
import { Context } from "../jsmodules.js/context";




// ========================================================
// COMPONENT: ExpenseView
// PURPOSE: Displays an individual product with image, title, and price.
// NOTES: Receives 'product' prop. Click triggers the 'onSelect' callback.
// ========================================================
const InventoryView = () => {
  
  // This is the context data, and it will be used to set the data in the context.
  const { setData } = useContext(Context);
  // ===========================
  // onSnapshot is used to listen for real-time updates to the collection
  // and update the liveInventoryData array whenever there are changes.
  // For example, it is like the [] in useEffect([]) in React, that executes the function whenever the depencies insithe the array change.
  // It is like a subscription to the collection, so whenever there is a change in the collection, it will update the liveInventoryData array. -- 
  const [liveInventoryData, setLiveInventoryData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, snapshot => {
    const data = snapshot.docs.map( item => ({ ...item.data(), id: item.id }));
    
    // Setting the liveInventoryData state with the data retrieved from the database (Live updates)
    setLiveInventoryData(data);

    const onlyPrices = data.map(item => parseFloat(item.price) ); // This'll be used to show the total of the filtered items.
    
    // Extracts only the prices from the data array
    setData(prev =>([...prev, ...onlyPrices])); // This'll set the data in the context, and will be used to show the data in the filter component.
    });
    
    return () => unsubscribe(); // Cleanup the subscription on unmount
  },[]);
  
// 🧪 ===================== Test code =============================== 🧪
// Trying to get the description and adding the ... if it is too long

  // 🧪 ==================================================== 🧪


  // ==================== Component body ====================
  return ( 
  <div className="Inventory-View">
    {/* This is the header of the table, and it will be used to show the items in the database. */}

    {/* These are all the items retrieved from the DB */}
  
    {
      (liveInventoryData.length === 0) ?
      <span colSpan="5">Loading data..</span>
      :
      liveInventoryData.map((item, key)=>(
        <InventoryItem 
          key = {key}
          description ={item.description}
          SKU = {item?.SKU}
          price = {item.price}
          date = {item.dateOfCreation}
          category = {item.category}
          id = {item.id}
        />
      ))
    } 

  </div> );
}

export default InventoryView;