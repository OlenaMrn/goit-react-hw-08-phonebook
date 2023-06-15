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
    <div className={css.wrapper}>
      <div className={css.loginForm}>
        {/* <h3 className={css.formTitle}>Log In</h3> */}
        <form
          className={css.formField}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label>
            <p className={css.labelText}>Email</p>
            <input type="email" name="email" className={css.input} />
          </label>
          <label>
            <p className={css.labelText}>Password</p>
            <input type="password" name="password" className={css.input} />
          </label>
          <button type="submit" className={css.formSubmit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
