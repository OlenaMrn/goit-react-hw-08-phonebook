import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.registrationForm}>
        <h3 className={css.formTitle}>You can register here</h3>
        <form
          className={css.formField}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className={css.label}>
            Username
            <input type="text" name="name" className={css.input} />
          </label>
          <label className={css.label}>
            Email
            <input type="email" name="email" className={css.input} />
          </label>
          <label className={css.label}>
            Password
            <input type="password" name="password" className={css.input} />
          </label>
          <button type="submit" className={css.formSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
