import { FormEvent, useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import * as SC from './AddNotice.styled';
import { StepOne } from './StepOne/StepOne';
import { StepTwo } from './StepTwo/StepTwo';

interface IAddNoticeProps {
  toggleModal: () => void;
}

type FormData = {
  type: 'sell' | 'lostfound' | 'free';
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
  type: 'sell',
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
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return { ...prev, ...fields };
    });
  };

  const { step, next, back, isFirstStep, isLastStep } = useMultistepForm([
    <StepOne {...data} updateFields={updateFields} />,
    <StepTwo {...data} updateFields={updateFields} />,
  ]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!isLastStep) {
      return next();
    }

    //Тут має бути діспатч даних
    console.log(data);

    toggleModal();
  };

  return (
    <SC.Modal>
      <h2>Add pet</h2>
      <form onSubmit={handleSubmit}>
        {step}
        <div>
          {isFirstStep ? (
            <button type="button" onClick={toggleModal}>
              Cancel
            </button>
          ) : (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button>{isLastStep ? 'Done' : 'Next'}</button>
        </div>
      </form>
    </SC.Modal>
  );
};

export default AddNotice;
