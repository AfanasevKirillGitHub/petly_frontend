import { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';

import {
  BtnImage,
  BtnImageDis,
  BtnImageDone,
  FieldText,
  StyledBtn,
  StyledInput,
  StyledValue,
  Wrapper,
} from './UserDataItem.styled';

const today = new Date();

const nameSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Too short!')
    .max(18, 'Too long!')
    .matches(
      /^[a-zA-Zа-яіїєА-ЯІЇЄ'""\s? ][a-zA-Zа-яіїєА-ЯІЇЄ'""-\s? ]*$/,
      'Incorrect format'
    )
    .required('Field is required!'),
});

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email field is required')
    .matches(
      /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/,
      'Incorrect format'
    )
    .max(70, 'Maximum 70 characters')
    .min(7, 'Minimum 10 characters')
    .email(),
});

const citySchema = yup.object({
  city: yup
    .string()
    .min(2, 'Min 2 characters')
    .max(18, 'Max 18 characters')
    .matches(
      /^[a-zA-Zа-яіїєА-ЯІЇЄ'\s? ][a-zA-Zа-яіїєА-ЯІЇЄ'-\s? ]*$/,
      'Incorrect format'
    ),
});

const phoneSchema = yup.object({
  phone: yup
    .string()
    .min(9, 'Min 9 characters')
    .max(15, 'Max 15 characters')
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      'Incorrect format'
    ),
});

const birthdaySchema = yup.object({
  birthday: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (_, originalValue) {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());

      return parsedDate;
    })
    .typeError('Please enter a valid date: dd.MM.yyyy')
    .required()
    .min('01.01.1920', 'Date is too early')
    .max(today),
});

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || '';

export default function UserDataItem({
  field,
  initValue,
  setIsDisabledBtn,
  isDisabledBtn,
  setUser,
}) {
  const [isEdit, setIsEdit] = useState(false);

  const addSchema = field => {
    switch (field) {
      case 'name':
        return nameSchema;
      case 'email':
        return emailSchema;

      case 'city':
        return citySchema;

      case 'birthday':
        return birthdaySchema;

      case 'phone':
        return phoneSchema;

      default:
        return nameSchema;
    }
  };
  return (
    <Formik
      validationSchema={addSchema(field)}
      initialValues={initValue}
      validateOnBlur={false}
      validateOnChange={true}
      onSubmit={values => {
        if (Object.keys(values)[0] === 'birthday') {
          setUser({ birthday: parseDateToISO(values.birthday) });
          setIsEdit(false);
          setIsDisabledBtn(false);
          return;
        }
        if (Object.keys(values)[0] === 'city') {
          setUser({ city: values.city });
          setIsEdit(false);
          setIsDisabledBtn(false);
          return;
        }

        setUser(values);
        setIsEdit(false);
        setIsDisabledBtn(false);
      }}
    >
      {({ values, handleSubmit, errors, touched }) => (
        <Form>
          <Wrapper>
            <FieldText>{capitalize(field)}:</FieldText>
            {isEdit ? (
              <StyledInput autoComplete="off" name={field} />
            ) : (
              <StyledValue>{values[field]}</StyledValue>
            )}

            {!isEdit && !isDisabledBtn && (
              <StyledBtn
                type="button"
                onClick={() => {
                  setIsEdit(true);
                  setIsDisabledBtn(true);
                }}
              >
                <BtnImage />
              </StyledBtn>
            )}
            {isDisabledBtn && !isEdit && (
              <StyledBtn type="button" disabled isDisabled>
                <BtnImageDis />
              </StyledBtn>
            )}

            {isEdit && (
              <StyledBtn
                type="submit"
                onClick={handleSubmit}
                onSubmit={() => {
                  setTimeout(function () {
                    const element = document.getElementById('#success');
                    if (element) {
                      element.remove();
                    }
                    return;
                  }, 3000);
                }}
              >
                <BtnImageDone />
              </StyledBtn>
            )}
          </Wrapper>
          <ErrorMessage
            name={field}
            render={msg => (
              <div
                id="fail"
                style={{
                  color: 'red',
                  fontSize: '.6rem',
                  position: 'relative',
                  maxWidth: '55%',
                  marginBottom: '8px',
                  marginLeft: 'auto',
                  marginRight: '32px',
                  height: '20px',
                }}
              >
                {msg}
              </div>
            )}
          />

          {!errors[field] &&
          values[field] !== '' &&
          touched[field] &&
          initValue[field] !== values[field] &&
          values[field] ? (
            <div
              id="success"
              style={{
                color: 'green',
                fontSize: '.6rem',
                position: 'relative',
                maxWidth: '55%',
                marginBottom: '8px',
                marginLeft: 'auto',
                marginRight: '32px',
                height: '20px',
              }}
            >
              {field} field is correct
            </div>
          ) : null}
        </Form>
      )}
    </Formik>
  );
}

function parseDateToISO(str) {
  if (str === '00.00.0000') {
    return null;
  }
  const dateParts = str.split('.');
  const formattedDate = new Date(
    +dateParts[2],
    +dateParts[1] - 1,
    +dateParts[0]
  );

  return formattedDate.toISOString();
}
