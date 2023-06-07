import css from './LoginPage.module.css'
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
   
        return (
    <div className={css.wrapper}>
                <LoginForm />
               
    </div>
  );

};
export default LoginPage;