import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { signIn } from '../../redux/auth/authOperations';
import { ICredentials } from '../../helpers/interfaces/auth/authInterfaces';
import { NavLink } from 'react-router-dom';
import * as SC from "./LoginForm.styled"

export const LoginForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const { t } = useTranslation()

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      'password'
    ) as HTMLInputElement;
    const payload: ICredentials = {
      email: emailInput.value.toLowerCase(),
      password: passwordInput.value,
    };
    dispatch(signIn(payload));
    form.reset();
  };
  return (
    <SC.InnerDiv>
    <SC.Title>{t("Login")}</SC.Title>
    <SC.Form onSubmit={handleSubmit} autoComplete="off">
      <SC.Input
        id="email"
        type="email"
        name="email"
        placeholder={t("Example@gmail.com")!}
        required
      />
      <SC.Input
        id="password"
        type="password"
        name="password"
        placeholder={t("Password")!}
        required
      />

      <SC.Button type="submit">{t("Login")!}</SC.Button>
    </SC.Form>
    <p>{t("Don't have an account")!}? <NavLink to="/registration">{t("Register")!}</NavLink></p>
    </SC.InnerDiv>
  );
};
