import { FormEvent, useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import * as SC from './AddNotice.styled';
import { StepOne } from './StepOne/StepOne';
import { StepTwo } from './StepTwo/StepTwo';
import { useAddNoticesMutation } from '../../redux/notices/noticesOperations';
import defaultAvatar from '../../helpers/photos/default-avatar.png';

interface IAddNoticeProps {
  toggleModal: () => void;
}

type FormData = {
  category: 'sell' | 'lost-found' | 'for-free';
  sex: 'male' | 'female';
  title: string;
  name: string;
  birthdate: string;
  breed: string;
  location: string;
  price: string;
  avatarURL: string;
  comments: string;
};

const INITIAL_DATA: FormData = {
  category: 'sell',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: 'male',
  location: '',
  price: '',
  avatarURL: '',
  comments: '',
};

const AddNotice = ({ toggleModal }: IAddNoticeProps) => {
  const [dispatch, { isError }] = useAddNoticesMutation();
  const [formData, setFormData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData(prev => {
      return { ...prev, ...fields };
    });
  };

  const { step, next, back, isFirstStep, isLastStep } = useMultistepForm([
    <StepOne {...formData} updateFields={updateFields} />,
    <StepTwo {...formData} updateFields={updateFields} />,
  ]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!isLastStep) {
      return next();
    }

    dispatch({
      ...formData,
      title: { en: formData.title, ua: 'фваиміваиіваи' },
      breed: { en: formData.breed, ua: 'фваиміваиіваи' },
      comments: { en: formData.comments, ua: 'фваиміваиіваи' },
      location: {
        city: { en: formData.location.split(', ')[0], ua: 'фваиміваиіваи' },
        region: { en: formData.location.split(', ')[1], ua: 'фваиміваиіваи' },
      },
      price: Number(formData.price),
      birthdate: new Date(formData.birthdate),
      avatarURL: formData.avatarURL ? formData.avatarURL : defaultAvatar,
    });

    if (!isError) {
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
