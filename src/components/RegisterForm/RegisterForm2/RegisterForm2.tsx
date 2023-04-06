import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { NavLink } from 'react-router-dom';
import { signUp } from '../../../redux/auth/authOperations';
import { useTranslation } from 'react-i18next';
import { IFormOneData } from '../../../pages/RegisterPage/RegisterPage';
import { ICredentials } from '../../../helpers/interfaces/auth/authInterfaces';

interface IProps {
  onToggle: () => void;
  dataForm1: IFormOneData | {};
}

export const RegisterForm2 = ({ onToggle, dataForm1 }: IProps) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { t } = useTranslation();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const city = (form.elements.namedItem('city') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;

    const payload: ICredentials = {
      ...(dataForm1 as {
        email: string;
        password: string;
      }),
      name,
      city,
      phone,
    };

    dispatch(signUp(payload));
    form.reset();
  };

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off">
        <input
          id="name"
          type="text"
          name="name"
          placeholder={t('Name')!}
          required
        />

        <input
          id="city"
          type="text"
          name="city"
          placeholder={t('City, Region')!}
          required
        />

        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder={t('Mobile Phone')!}
          required
        />

        <button type="submit">{t('Registration')}</button>
        <button onClick={onToggle} type="button">
          {t('Back')}
        </button>
      </form>
      <p>
        {t('Already have an account')}?
        <NavLink to="/login">{t('Login')}</NavLink>
      </p>
    </>
  );
};
