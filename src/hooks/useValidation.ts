import { useEffect, useState } from 'react';

interface ISetings {
  [key: string]: boolean | number | string;
}

export const useValidation = (value: string, validations: ISetings) => {
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmError, isConfirmError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false)
  const [cityError, setCityError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < (validations[validation] as number)
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmail':
          const reMail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            reMail.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case 'isSamePassword':
          value === validations[validation] && value !== ''
            ? isConfirmError(true)
            : isConfirmError(false);
          break;
        case 'isPhone':
          const rePhone = /^(\+38)[0-9]{10}$/
          rePhone.test(String(value).toLowerCase())
          ? setPhoneError(false)
          : setPhoneError(true);
          break;
        case 'isName':
          const reName = /^\p{L}+$/u
          reName.test(String(value).toLowerCase())
          ? setNameError(false)
          : setNameError(true);
          break
        case 'isCity':
          const reCity = /^[\p{L}\s]+,[\s]*[\p{L}\s]+$/u
          reCity.test(String(value).toLowerCase())
          ? setCityError(false)
          : setCityError(true);
          break
        case 'isPassword':
          const rePassword = /^(?=.*)[^\s]{7,32}$/ 
          rePassword.test(String(value).toLowerCase())
          ? setPasswordError(false)
          : setPasswordError(true);
          break
        default:
          console.log('нет такой проверки');
      }
    }
  }, [value, validations]);

  return {
    minLengthError,
    emailError,
    confirmError,
    PhoneError,
    nameError,
    cityError,
    passwordError
  };
};
