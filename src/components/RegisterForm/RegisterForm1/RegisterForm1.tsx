// import { useState, useEffect, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { IFormOneData } from '../../../pages/RegisterPage/RegisterPage';
import * as SC from './RegisterForm1.styled';
import { useInput } from '../../../hooks/useInput';

interface IProps {
  onToggle: () => void;
  getData: (data: IFormOneData) => void;
}

export const RegisterForm1 = ({ onToggle, getData }: IProps) => {
  // const [formValid, setFormValid] = useState(false);
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [email, setEmail] = useState('');

  const { t } = useTranslation();
  const email = useInput('', { isEmail: true });
  const password = useInput('', { minLength: 6 });
  const confirmPassword = useInput('', { isSamePassword: password.value });

  // console.log(confirmPassword)
  // useEffect(() => {
  //   if (password === confirmPassword && password !== '') {
  //     setFormValid(true);
  //   } else {
  //     setFormValid(false);
  //   }
  // }, [confirmPassword, password]);

  // const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.currentTarget;
  //   switch (name) {
  //     case 'password':
  //       setPassword(value);
  //       break;

  //     case 'confirmPassword':
  //       setConfirmPassword(value);
  //       break;

  //     case 'email':
  //       setEmail(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  const onNextForm = () => {
    getData({ email: email.value, password: password.value });
    onToggle();
  };

  return (
    <SC.InnerDiv>
      <SC.Title>{t('Registration')}</SC.Title>
      <SC.Div>
        <SC.Input
          style={{
            border:
              ((email.isDirty &&
                !email.emailError &&
                '1px solid green') as string) ||
              ((email.isDirty &&
                email.emailError &&
                '1px solid red') as string),
          }}
          type="email"
          value={email.value}
          onChange={e => email.onChange(e)}
          name="email"
          placeholder={t('Email')!}
          required
        />
        {(email.isDirty && email.emailError && (
          <SC.Notification style={{ color: 'red' }}>
            {t('Enter a valid Email')}
          </SC.Notification>
        )) ||
          (email.isDirty && !email.emailError && (
            <SC.Notification style={{ color: 'green' }}>
              {t('Email is correct')}
            </SC.Notification>
          ))}
      </SC.Div>
      <SC.Div>
        <SC.Input
          style={{
            border:
              ((password.isDirty &&
                !password.minLengthError &&
                '1px solid green') as string) ||
              ((password.isDirty &&
                password.minLengthError &&
                '1px solid red') as string),
          }}
          type="password"
          value={password.value}
          onChange={e => password.onChange(e)}
          name="password"
          placeholder={t('Password')!}
          required
        />
        {password.isDirty && password.minLengthError && (
          <SC.Notification style={{ color: 'red' }}>
            {t('Enter a valid Password')}
          </SC.Notification>
        )}
        {password.isDirty && !password.minLengthError && (
          <SC.Notification style={{ color: 'green' }}>
            {t('Password is correct')}
          </SC.Notification>
        )}
      </SC.Div>
      <SC.Div>
        <SC.Input
          style={{
            border:
              ((confirmPassword.isDirty &&
                password.value === confirmPassword.value &&
                '1px solid green') as string) ||
              ((confirmPassword.isDirty &&
                password.value !== confirmPassword.value &&
                '1px solid red') as string),
          }}
          type="password"
          value={confirmPassword.value}
          onChange={e => confirmPassword.onChange(e)}
          name="confirmPassword"
          placeholder={t('Confirm Password')!}
          required
        />
        {confirmPassword.isDirty &&
          password.value === confirmPassword.value && (
            <SC.Notification style={{ color: 'green' }}>
              {t('confirmPassword is correct')}
            </SC.Notification>
          )}
        {confirmPassword.isDirty &&
          password.value !== confirmPassword.value && (
            <SC.Notification style={{ color: 'red' }}>
              {t('confirmPassword is not correct')}
            </SC.Notification>
          )}
      </SC.Div>
      <SC.Button
        disabled={!confirmPassword.confirmError}
        type="button"
        onClick={onNextForm}
      >
        {t('Next')}
      </SC.Button>
      <p>
        {t('Already have an account')}?
        <NavLink to="/login">{t('Login')}</NavLink>
      </p>
    </SC.InnerDiv>
  );
};
