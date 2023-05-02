import { useState } from 'react';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { Modal } from '../Modal/Modal';
import * as SC from './AddPet.styled';
import { useAddPetsMutation } from '../../redux/pets/petsOperations';

const INITIAL_PET_DATA = {
  name: '',
  birthday: '',
  breed: '',
  photo: '',
  comments: '',
};

export const AddPet = ({ toggleModal }) => {
  const [data, setData] = useState(INITIAL_PET_DATA);
  const [addPet, { isLoading, isSuccess }] = useAddPetsMutation();

  const updateFields = fields => {
    setData(prev => {
      return { ...prev, ...fields };
    });
  };

  const { step, next, back, isFirstStep, isLastStep } = useMultistepForm([
    <StepOne {...data} updateFields={updateFields} />,
    <StepTwo {...data} updateFields={updateFields} />,
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    console.log('Pet data :>> ', data);
    const petData = new FormData();
    petData.append('name', data.name);
    petData.append('birthday', data.birthday);
    petData.append('breed', data.breed);
    petData.append('photo', data.photo);
    petData.append('comments', data.comments);

    addPet(data);

    // console.log('petData :>> ', petData.get('petName'));
    // console.log('petData :>> ', petData.get('birthday'));
    // console.log('petData :>> ', petData.get('breed'));
    // console.log('petData :>> ', petData.get('photo'));
    // console.log('petData :>> ', petData.get('comments'));

    isSuccess && toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <SC.AddPetModal>
        <SC.Title isLastStep>Add pet</SC.Title>
        <form onSubmit={handleSubmit}>
          {step}
          <SC.BtnWrapper>
            <SC.Button disabled={isLoading}>
              {isFirstStep ? 'Next' : 'Done'}
            </SC.Button>
            <SC.BtnSecondary
              type="button"
              onClick={isFirstStep ? toggleModal : back}
            >
              {isFirstStep ? 'Cancel' : 'Back'}
            </SC.BtnSecondary>
          </SC.BtnWrapper>
        </form>
      </SC.AddPetModal>
    </Modal>
  );
};
