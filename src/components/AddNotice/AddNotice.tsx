import { FormEvent, useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import * as SC from './AddNotice.styled';
import { StepOne } from './StepOne/StepOne';
import { StepTwo } from './StepTwo/StepTwo';
import { useAddNoticesMutation } from '../../redux/notices/noticesOperations';

interface IAddNoticeProps {
  toggleModal: () => void;
}

type FormData = {
  category: 'sell' | 'lost-found' | 'for-free';
  sex: 'male' | 'female';
  title: string;
  name: string;
  date: string;
  breed: string;
  location: string;
  price: string;
  photo: string;
  comments: string;
};

const INITIAL_DATA: FormData = {
  category: 'sell',
  title: '',
  name: '',
  date: '',
  breed: '',
  sex: 'male',
  location: '',
  price: '',
  photo: '',
  comments: '',
};

const AddNotice = ({ toggleModal }: IAddNoticeProps) => {
  const [dispatch, { isSuccess }] = useAddNoticesMutation();
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

    //Тут має бути діспатч даних
    console.log(formData);
    dispatch(formData);

    if (isSuccess) {
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
