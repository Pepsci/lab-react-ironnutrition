import React from 'react';

const SearchFood = ({ searchFood, callbackSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Looking for food"
        value={searchFood}
        onChange={(e) => callbackSearch(e.target.value)}
      />
    </>
  );
};

export default SearchFood;
