import { useDispatch } from 'react-redux';
import { signInWhithToken } from '../../redux/auth/authOperations';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import * as SC from './LoginPage.styled';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export const LoginPage = () => {
  const { token } = useGetSearchParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  if (token) {
    dispatch(signInWhithToken(token));
  }

  return (
    <SC.Main>
      <LoginForm />
    </SC.Main>
  );
};
