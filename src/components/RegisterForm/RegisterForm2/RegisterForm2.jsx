import { useDispatch } from 'react-redux';
import { signUp } from "../../../redux/auth/authOperations";
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const RegisterForm2 = ({onToggle, dataForm1}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
        signUp({
        ...dataForm1,
        name: form.elements.name.value,
        city: form.elements.city.value,
        phone: form.elements.phone.value,
      })
    );
    form.reset();
  };

  return (
    <>
    <h2>{t("Registration")}</h2>
    <form onSubmit={onSubmit} autoComplete="off">
          <input
            id="name"
            type="text"
            name="name"
            placeholder={t('Name')}
            required
          />

          <input
            id="city"
            type="text"
            name="city"
            placeholder={t("City, Region")}
            required
          />

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder={t("Mobile Phone")}
            required
          />


      <button type="submit">{t("Registration")}</button>
    </form>
    <button onClick={onToggle} type="button">{t("Back")}</button>
    <p>{t("Already have an account")}?<NavLink to='/login'>{t("Login")}</NavLink></p>
    </>
  );
};