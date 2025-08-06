import { Icon } from "@iconify-icon/react";

const ViewFilter =()=> {
  return ( 
  <div 
  style = {{height: "max-content", width:"max-content"}} 
  className="bg-dark col-6 p-2 rounded"
  >
    <Icon icon="mdi:filter-outline" width="24" height="24" className="icon_cl"/>
    {/* This is the select item, to choose how to filter the data */}
    {/* <select name="" id="">
      <option value="">"Choose the type of view</option>
      <option value="">"Option" 👉🏾 1</option>
      <option value="">"Option" 👉🏾 2</option>
      <option value="">"Option" 👉🏾 3</option>
      <option value="">"Option" 👉🏾 4</option>
      <option value="">"Option" 👉🏾 5</option>
    </select> */}
  </div> );
}

export default ViewFilter;