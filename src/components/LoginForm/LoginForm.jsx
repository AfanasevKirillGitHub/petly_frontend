import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from 'redux';
import { signIn } from '../../redux/auth/authOperations';
// import { ICredentials } from '../../helpers/interfaces/auth/authInterfaces';
import { NavLink } from 'react-router-dom';
import * as SC from "./LoginForm.styled"
// import { use } from 'i18next';
import { useInput} from '../../huks/useInput'


export const LoginForm = () => {
  const dispatch = useDispatch ();
  const { t } = useTranslation()

  const email = useInput('', {isEmail: true});
  const password = useInput('', {minLength: 6})

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;
    const payload = {
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
        style={{border: ((email.isDirty && !email.emailError) && "1px solid green") || ((email.isDirty && email.emailError) && "1px solid red")}}
        onChange={e => email.onChange(e)}
        type="email"
        value={email.value}
        name="email"
        placeholder={t("Example@gmail.com")}
        required
      />
      {((email.isDirty && email.emailError) && <div style={{color: "red"}}>Enter a valid Email</div>) || 
      ((email.isDirty && !email.emailError) && <div style={{color: "green"}}>Email is correct</div>)}

      <SC.Input
        style={{border: ((password.isDirty && password.minLengthError) && "1px solid red") || ((password.isDirty && !password.minLengthError) && "1px solid green")}}
        onChange={e => password.onChange(e)}
        type="password"
        value={password.value}
        name="password"
        placeholder={t("Password")}
        required
      />
      {((password.isDirty && password.minLengthError) && <div style={{color: "red"}}>Enter a valid Password</div>)}
      {((password.isDirty && !password.minLengthError) && <div style={{color: "green"}}>Password is correct</div>)}

      <SC.Button type="submit">{t("Login")}</SC.Button>
    </SC.Form>
    <p>{t("Don't have an account")}? <NavLink to="/registration">{t("Register")}</NavLink></p>
    </SC.InnerDiv>
  );
};
