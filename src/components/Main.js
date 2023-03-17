import React, { useState, useEffect } from 'react';
import "../Styles/Main.css";

function Main() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const cachedItems = JSON.parse(localStorage.getItem('items')) || [];
    setListItems(cachedItems);
  }, []);

  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    const newItems = [...listItems, inputValue];
    setListItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
    setInputValue('');
  };

  const handleUpdateText = (event) => {
    event.preventDefault();
    console.log(event)
  } 

  // 

  const [text, setText] = useState('initial text'); // state kullanarak bir text değişkeni oluşturun ve başlangıç değerini belirleyin

  function updateText() {
    setText('updated text'); // setText fonksiyonunu kullanarak text değişkeninin değerini güncelleyin
  }


  return (
    <div>
        <h1>Hi! I’m To Do List</h1>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={handleAddItem}>Ekle</button>
        
      </div>
      <ul>
        {listItems.map((item, index) => (
            
            <div className='list-item'>
            <input type="checkBox"  className=''/>
            <p key={index}>{item}</p>
            <button onClick={handleUpdateText}>Update</button>
            <button>Delete</button>
            </div>
            
            
        ))}
      </ul>
    </div>
  );
}

export default Main;