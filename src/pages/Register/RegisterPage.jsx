import React from 'react';
import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegistrationForm/RegistrationForm';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
