import { FormEvent, useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import * as SC from './AddNotice.styled';
import { StepOne } from './StepOne/StepOne';
import { StepTwo } from './StepTwo/StepTwo';
import { useAddNoticesMutation } from '../../redux/notices/noticesOperations';

interface IAddNoticeProps {
  toggleModal: () => void;
}

type FormInputs = {
  category: 'sell' | 'lost-found' | 'for-free';
  sex: 'male' | 'female';
  title: string;
  name: string;
  birthdate: string;
  breed: string;
  location: string;
  price: string;
  avatarURL: File | string | null;
  comments: string;
};

const INITIAL_DATA: FormInputs = {
  category: 'sell',
  title: 'weqweqw',
  name: 'eqeqw',
  birthdate: '',
  breed: 'qee',
  sex: 'male',
  location: 'ewqeqwe, qeqe',
  price: '133',
  avatarURL: null,
  comments: 'weqweqqeq',
};

const AddNotice = ({ toggleModal }: IAddNoticeProps) => {
  const [dispatch, { isError, isLoading }] = useAddNoticesMutation();
  const [formInputs, setFormInputs] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormInputs>) => {
    setFormInputs(prev => {
      return { ...prev, ...fields };
    });
  };

  const { step, next, back, isFirstStep, isLastStep } = useMultistepForm([
    <StepOne {...formInputs} updateFields={updateFields} />,
    <StepTwo {...formInputs} updateFields={updateFields} />,
  ]);

  console.log(formInputs.avatarURL);
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!isLastStep) {
      return next();
    }

    const formData = new FormData();

    formData.append('title', formInputs.title as string);
    formData.append('name', formInputs.name as string);
    formData.append('category', formInputs.category as string);
    formData.append('birthdate', formInputs.birthdate as string);
    formData.append('breed', formInputs.breed as string);
    formData.append('sex', formInputs.sex as string);
    formData.append('location', formInputs.location as string);
    formData.append('price', formInputs.price as string);
    formData.append('comments', formInputs.comments as string);
    formData.append('avatarURL', formInputs.avatarURL as File);

    dispatch(formData);

    // dispatch({
    //   ...formInputs,
    //   title: { en: formInputs.title, ua: 'Шукаю гуся' },
    //   breed: { en: formInputs.breed, ua: 'Гусь Мотивуючий' },
    //   comments: {
    //     en: formInputs.comments,
    //     ua: 'Будь ласка, допоможіть знайти',
    //   },
    //   location: {
    //     city: { en: formInputs.location.split(', ')[0], ua: 'Київ' },
    //     region: { en: formInputs.location.split(', ')[1], ua: 'Україна' },
    //   },
    //   price: Number(formInputs.price),
    //   avatarURL:
    //     'https://preview.redd.it/2oxv62gme7u71.png?auto=webp&s=1197fa2f96d47e01988714065202432298b87d21',
    // });

    console.log(formInputs);

    if (!isLoading && !isError) {
      toggleModal();
    }
  };

  return (
    <SC.Modal>
      <SC.Title>Add pet</SC.Title>
      <form onSubmit={handleSubmit}>
        {step}
        <SC.ButtonWrapper>
          {isFirstStep ? (
            <SC.BtnSecondary type="button" onClick={toggleModal}>
              Cancel
            </SC.BtnSecondary>
          ) : (
            <SC.BtnSecondary type="button" onClick={back}>
              Back
            </SC.BtnSecondary>
          )}
          <SC.Button>{isLastStep ? 'Done' : 'Next'}</SC.Button>
        </SC.ButtonWrapper>
      </form>
    </SC.Modal>
  );
};

export default AddNotice;

// const formData = new FormData();

// formData.append('avatarURL', formInputs.avatarURL as File);
// formData.append(
//   'title',
//   JSON.stringify({ en: formInputs.title, ua: 'Шукаю гуся' })
// );
// formData.append('name', formInputs.name as string);
// formData.append('category', formInputs.category as string);
// formData.append('birthdate', formInputs.birthdate as string);
// formData.append(
//   'breed',
//   JSON.stringify({ en: formInputs.breed, ua: 'Гусь Мотивуючий' })
// );
// formData.append('sex', formInputs.sex as string);
// formData.append(
//   'location',
//   JSON.stringify({
//     city: { en: formInputs.location.split(', ')[0], ua: 'Київ' },
//     region: { en: formInputs.location.split(', ')[1], ua: 'Україна' },
//   })
// );
// formData.append('price', formInputs.price as string);
// formData.append(
//   'comments',
//   JSON.stringify({
//     en: formInputs.comments,
//     ua: 'Будь ласка, допоможіть знайти',
//   })
// );

// dispatch(formInputs);
