import { db } from './dbInitialization';
import { addDoc, deleteDoc, collection, updateDoc, doc} from 'firebase/firestore';

// ====================================================================
const collectionRef = collection(db, "Inventory");


// async function fetchInventoryData() {
//   const snapshot = await getDocs(collectionRef);
//   return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
// }

// ====================================================================
//Adding data to the database
const addingAnItem = ( inventoryIteem )=>{
  addDoc(collectionRef,{
      // Here I can put the properties E.G
      description :  inventoryIteem.description,
      price:inventoryIteem.price,
      category:inventoryIteem.category,
      dateOfCreation : inventoryIteem.currentDate,
      SKU: inventoryIteem.SKU
    }
  )
}
// ====================================================================


// Deleting data from the database
const deletingAnItem = async (id) => {
  await deleteDoc(doc(db, "Inventory", id));
  console.log("Item deleted:", id);
  // Optionally, you can also update the state or perform any other actions after deletion   
}


// ====================================================================
//Updating data in the database
const updatingAnItem = async (id, updatedData) => {
  const itemRef = doc(db, "Inventory", id);
  await updateDoc(itemRef, updatedData);
  // Optionally, you can also update the state or perform any other actions after updating
}


// Exporting the functions to be used in other components
export { addingAnItem, deletingAnItem, collectionRef, updatingAnItem };