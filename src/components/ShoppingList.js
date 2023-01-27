import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleChangeItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState('')
  const [newName, setNewName] = useState('')
  const [newCategory, setNewCategory] = useState('Produce')

  function handleNewCategory(event) {
    setNewCategory(event.target.value);
    console.log(newCategory)
  }
  function handleSearchTextChange(e){
    setSearchText(e.target.value)
  }
  function handleNameChange(e){
    setNewName(e.target.value)
  }
  function handleCategoryChange(e){
    setSelectedCategory(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  const filteredItemsToDisplay = itemsToDisplay.filter((item)=> {
    return item.name.toLowerCase().includes(searchText.toLowerCase())
  })


  return (
    <div className="ShoppingList">
      <ItemForm newName = {newName} newCategory = {newCategory} onNameChange= {handleNameChange} onNewCategory = {handleNewCategory} handleChangeItems = {handleChangeItems}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchTextChange = {handleSearchTextChange} searchText = {searchText}/>
      <ul className="Items">
        {filteredItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
