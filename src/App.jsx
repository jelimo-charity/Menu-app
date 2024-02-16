import React, { useState } from 'react';
import './App.css';
import Categories from './components/Categories.jsx';
import Menu from './components/Menu.jsx';
import menu from './components/data.js';

const allCategories = ['all', ...new Set(menu.map((item)=>
item.category))];
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);
  
  const filterItems = (category)=>{
    const newItems = menu.filter((item)=>
    item.category === category);
    setMenuItems(newItems)
    
  }
  return (
    <section>
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <Categories filterItems = {filterItems} />
      <Menu menu = {menuItems} />
     
    </section>
  );
}

export default App;
