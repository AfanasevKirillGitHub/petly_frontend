import { useState, useEffect, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { IFormOneData } from '../../../pages/RegisterPage/RegisterPage';

interface IProps {
  onToggle: () => void;
  getData: (data: IFormOneData) => void;
}

export const RegisterForm1 = ({ onToggle, getData }: IProps) => {
  const [formValid, setFormValid] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    if (password === confirmPassword && password !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [confirmPassword, password]);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'password':
        setPassword(value);
        break;

      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        return;
    }
  };

  const onNextForm = () => {
    getData({ email, password });
    onToggle();
  };

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={inputChange}
        name="email"
        placeholder={t('Email')!}
        required
      />

      <input
        type="password"
        value={password}
        onChange={inputChange}
        name="password"
        placeholder={t('Password')!}
        required
        minLength={6}
      />

      <input
        type="password"
        value={confirmPassword}
        onChange={inputChange}
        name="confirmPassword"
        placeholder={t('Confirm Password')!}
        required
        minLength={6}
      />

      <button
        disabled={!formValid || password.length <= 5}
        type="button"
        onClick={onNextForm}
      >
        {t('Next')}
      </button>
      <p>
        {t('Already have an account')}?
        <NavLink to="/login">{t('Login')}</NavLink>
      </p>
    </>
  );
};
