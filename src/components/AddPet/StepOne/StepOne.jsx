import { useState } from 'react';
import * as SC from './StepOne.styled';

export const StepOne = ({ petName, dateOfBirth, breed, updateFields }) => {
  const [isOnFocus, setIsOnFocus] = useState(false);

  return (
    <SC.LabelsWrapper>
      <SC.Label>
        Name pet
        <SC.Input
          type="text"
          name="petName"
          placeholder="Type name pet"
          value={petName}
          onChange={e => {
            updateFields({ petName: e.target.value });
          }}
        />
      </SC.Label>

      <SC.Label>
        Date of birth
        <SC.Input
          type={isOnFocus ? 'date' : 'text'}
          name="dateOfBirth"
          placeholder="Type date of birth"
          onFocus={() => setIsOnFocus(true)}
          onBlur={() => setIsOnFocus(false)}
          value={dateOfBirth}
          onChange={e => {
            updateFields({ dateOfBirth: e.target.value });
          }}
        />
      </SC.Label>

      <SC.Label>
        Breed
        <SC.Input
          type="text"
          name="breed"
          placeholder="Type breed"
          value={breed}
          onChange={e => {
            updateFields({ breed: e.target.value });
          }}
        />
      </SC.Label>
    </SC.LabelsWrapper>
  );
};
