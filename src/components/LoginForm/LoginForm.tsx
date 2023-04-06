import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { signIn } from '../../redux/auth/authOperations';
import { ICredentials } from '../../helpers/interfaces/auth/authInterfaces';
import { NavLink } from 'react-router-dom';

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
    <>
    <h2>{t("Login")}</h2>
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        id="email"
        type="email"
        name="email"
        placeholder={t("Example@gmail.com")!}
        required
      />
      <input
        id="password"
        type="password"
        name="password"
        placeholder={t("Password")!}
        required
      />

      <button type="submit">{t("Login")!}</button>
    </form>
    <p>{t("Don't have an account")!}?<NavLink to="/registration">{t("Register")!}</NavLink></p>
    </>
  );
};
