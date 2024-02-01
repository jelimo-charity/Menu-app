import React from 'react';
import './App.css';
import menu from './components/data.js'; // Replace 'path-to-your-data' with the actual path to your data.js file

function App() {
  return (
    <section>
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
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
  );
}

export default App;
