import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { signIn } from '../../redux/auth/authOperations';
import { ICredentials } from '../../helpers/interfaces/auth/authInterfaces';

export const LoginForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Example@gmail.com"
        required
      />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};
