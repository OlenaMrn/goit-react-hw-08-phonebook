import React from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <div className={css.background}></div>
      <h1 className={css.title}>It's your Phone Book</h1>
      <p className={css.post_title}>
        Store and organize your contacts with ease
      </p>
    </>
  );
};

export default HomePage;
