import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginForm}>
      <h3 className={css.formTitle}>Log In</h3>
      <form
        className={css.formField}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit" className={css.formSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
};


