
import css from './RegisterPage.module.css'
import { RegisterForm } from 'components/RegistrationForm/RegistrationForm';
const RegisterPage = () => {
  return (
    <div className={css.wrapper}>
      <RegisterForm />
         </div>
  );
};


export default RegisterPage;