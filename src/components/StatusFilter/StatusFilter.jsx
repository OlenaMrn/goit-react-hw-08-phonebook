import React from 'react';
import { useDispatch } from 'react-redux';

import { setStatusFilter } from '../../redux/filter/filterSlice';

const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <form>
      <input
        placeholder="Find contacts by name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter name"
        onChange={handleFilterChange}
      />
      <button type="button">Search</button>
      <button type="button">Directions</button>
    </form>
  );
};

export default StatusFilter;
