import React from 'react'
import './menu.css'
import menu from './data.js'; // Replace 'path-to-your-data' with the actual path to your data.js file

const Menu = () => {
  return (
    <section>
      
      <div className="data">
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <p className="price">${item.price}</p>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
