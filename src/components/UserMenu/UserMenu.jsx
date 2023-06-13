import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Hello, {user.email}</p>
      <button className={css.button} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};