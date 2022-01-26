import React from 'react';
import './App.css';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import copy from './foods.json';
import FoodBox from './components/FoodBox';
import FormAddFood from './components/FormAddFood';
import SearchFood from './components/SearchFood';

function App() {
  const [foods, setFood] = useState(copy);
  const [isClick, setIsClick] = useState(false);
  const [searchFood, setSearchFood] = useState('');

  const addFood = (food) => {
    setFood([...foods, food]);
  };

  let search = null;
  if (searchFood !== '') {
    search = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchFood.toLowerCase());
    });
  } else {
    search = foods;
  }

  return (
    <div className="App">
      <div className="formAdd">
        <h1>Search Food</h1>
        <SearchFood searchFood={searchFood} callbackSearch={setSearchFood} />
        <h1>Form add food</h1>
        <button onClick={() => setIsClick(!isClick)}>Add Food</button>
        {isClick && <FormAddFood addFood={addFood} />}
      </div>

      <div className="food">
        {search.map((f) => {
          return <FoodBox food={f} key={f.name} />;
        })}
      </div>
    </div>
  );
}

export default App;
