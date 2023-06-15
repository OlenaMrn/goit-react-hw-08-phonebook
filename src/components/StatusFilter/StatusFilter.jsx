import React from 'react';
import { useDispatch } from 'react-redux';

import { setStatusFilter } from '../../redux/filter/filterSlice';
import css from './StatusFilter.module.css'

const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <form className={css.filter}>
      <label className={css.label}>Find contact by name</label>
      <input
        placeholder="Start typing..."
        type="text"
        name="name"
        className={css.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter name"
        onChange={handleFilterChange}
      />
    </form>
  );
};

export default StatusFilter;
