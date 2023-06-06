import React from 'react';

import css from './Home.module.css';

export const Home = () => {
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


