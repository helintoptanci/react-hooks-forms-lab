import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const { onNameChange, onNewCategory, handleChangeItems, newName, newCategory} = props
  const newItem = {
    name: newName,
    category: newCategory,
    key: newName
  }

  function onItemFormSubmit(e){
    e.preventDefault();
    handleChangeItems(newItem)
  }
  return (
    <form className="NewItem" onSubmit= {onItemFormSubmit}>
  
      <label>
        Name:
        <input type="text" name="name" onChange= {onNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onNewCategory}>
        <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
