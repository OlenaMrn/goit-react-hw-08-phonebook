import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/selectors';

import css from '../Navigation/Navigation.module.css';

export const Navigation = () => {
//   const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
    
    </nav>
  );
};
