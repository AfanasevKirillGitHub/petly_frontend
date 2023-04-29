import * as SC from './StepOne.styled';

type PetInfo = {
  type: 'sell' | 'lostfound' | 'free';
  title: string;
  name: string;
  date: string;
  breed: string;
};

type StepOneProps = PetInfo & {
  updateFields: (fields: Partial<PetInfo>) => void;
};

export const StepOne = ({
  type,
  title,
  name,
  date,
  breed,
  updateFields,
}: StepOneProps) => {
  return (
    <>
      <SC.Text>
        Don't wait any longer, give your furry friend the care and love they
        deserve by adding them to our family today!
      </SC.Text>
      <SC.RadioGroup>
        <SC.RadioLabel style={{ display: 'flex', alignItems: 'center' }}>
          <SC.RadioInput
            type="radio"
            name="type"
            value="sell"
            onChange={evt => {
              updateFields({ type: evt.currentTarget.value as 'sell' });
            }}
            checked={type === 'sell'}
          />
          <SC.RadioLabelSpan>sell</SC.RadioLabelSpan>
        </SC.RadioLabel>
        <SC.RadioLabel>
          <SC.RadioInput
            type="radio"
            name="type"
            value="lostfound"
            onChange={evt => {
              updateFields({ type: evt.currentTarget.value as 'lostfound' });
            }}
            checked={type === 'lostfound'}
          />
          <SC.RadioLabelSpan>lost/found</SC.RadioLabelSpan>
        </SC.RadioLabel>
        <SC.RadioLabel>
          <SC.RadioInput
            type="radio"
            name="type"
            value="free"
            onChange={evt => {
              updateFields({ type: evt.currentTarget.value as 'free' });
            }}
            checked={type === 'free'}
          />
          <SC.RadioLabelSpan>in good hands</SC.RadioLabelSpan>
        </SC.RadioLabel>
      </SC.RadioGroup>
      <SC.Label>
        <SC.FieldTitle>Tittle of ad</SC.FieldTitle>
        <SC.Input
          type="text"
          value={title}
          placeholder="Type name"
          onChange={evt => {
            updateFields({ title: evt.target.value });
          }}
        />
      </SC.Label>
      <SC.Label>
        <SC.FieldTitle>Name pet</SC.FieldTitle>
        <SC.Input
          type="text"
          value={name}
          placeholder="Type name pet"
          onChange={evt => {
            updateFields({ name: evt.target.value });
          }}
        />
      </SC.Label>
      <SC.Label>
        <SC.FieldTitle>Date of birth</SC.FieldTitle>
        <SC.Input
          name="birthday"
          type="date"
          value={date}
          onChange={evt => {
            updateFields({ date: evt.target.value });
          }}
        />
      </SC.Label>
      <SC.Label>
        <SC.FieldTitle>Breed</SC.FieldTitle>
        <SC.Input
          type="text"
          value={breed}
          placeholder="Type breed"
          onChange={evt => {
            updateFields({ breed: evt.target.value });
          }}
        />
      </SC.Label>
    </>
  );
};
