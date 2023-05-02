import { useState } from 'react';
import * as SC from './StepOne.styled';

export const StepOne = ({ name, birthday, breed, updateFields }) => {
  const [isOnFocus, setIsOnFocus] = useState(false);

  return (
    <SC.LabelsWrapper>
      <SC.Label>
        Name pet
        <SC.Input
          type="text"
          name="name"
          placeholder="Type name pet"
          value={name}
          onChange={e => {
            updateFields({ name: e.target.value });
          }}
        />
      </SC.Label>

      <SC.Label>
        Date of birth
        <SC.Input
          type={isOnFocus ? 'date' : 'text'}
          name="birthday"
          placeholder="Type date of birth"
          onFocus={() => setIsOnFocus(true)}
          onBlur={() => setIsOnFocus(false)}
          value={birthday}
          onChange={e => {
            updateFields({ birthday: e.target.value });
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
