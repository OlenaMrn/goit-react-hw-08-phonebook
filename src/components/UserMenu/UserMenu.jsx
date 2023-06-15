import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, {user.name}
        {''}
      </p>
      <button
        type="submit"
        className={css.logout}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
     
    </div>
  );
};
