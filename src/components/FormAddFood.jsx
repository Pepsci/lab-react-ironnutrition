import React, { useState } from 'react';

const FormAddFood = ({ addFood }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const food = { name, calories, quantity };
    console.log(food);
    addFood(food);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        name="calories"
        id="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button>Add Food</button>
    </form>
  );
};

export default FormAddFood;
