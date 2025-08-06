import { categories } from "../data/data"; 
import { useState, useEffect } from "react";

const CategorySelect = ({ categorySetter }) => {
  
  const [ select, setSelect ] = useState("");

const handleSelect = (e) => {
  setSelect(e.target.value);
};

useEffect(() => {
  categorySetter(prevState => ({
    ...prevState,
    category: select,
  }));
}, [select]);

  return ( 
  <select 
    name = "select"
    value = { select }
    onChange = { handleSelect }
    id = "expense-type"
    className = "form-select categories-container p-1"
    required
  >
  <option className = "category-item" disabled 
  value = { "👉🏾 Select a category" } defaultValue = {true}>
    👉🏾 Select a category
  </option>

  { categories.map((cat, index) => (
    <option
      key={index}
      className="category-item"
      value={`${cat.emoji} ${cat.label}`}
    >
      {`${cat.emoji} ${cat.label}`}
    </option>
  ))}
</select>

  );
}

export default CategorySelect;