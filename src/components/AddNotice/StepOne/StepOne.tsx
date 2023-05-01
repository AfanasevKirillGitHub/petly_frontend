import * as SC from './StepOne.styled';

type PetInfo = {
  category: 'sell' | 'lost-found' | 'for-free';
  title: string;
  name: string;
  date: string;
  breed: string;
};

type StepOneProps = PetInfo & {
  updateFields: (fields: Partial<PetInfo>) => void;
};

export const StepOne = ({
  category,
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
            name="category"
            value="sell"
            onChange={evt => {
              updateFields({ category: evt.currentTarget.value as 'sell' });
            }}
            checked={category === 'sell'}
          />
          <SC.RadioLabelSpan>sell</SC.RadioLabelSpan>
        </SC.RadioLabel>
        <SC.RadioLabel>
          <SC.RadioInput
            type="radio"
            name="type"
            value="lost-found"
            onChange={evt => {
              updateFields({
                category: evt.currentTarget.value as 'lost-found',
              });
            }}
            checked={category === 'lost-found'}
          />
          <SC.RadioLabelSpan>lost/found</SC.RadioLabelSpan>
        </SC.RadioLabel>
        <SC.RadioLabel>
          <SC.RadioInput
            type="radio"
            name="type"
            value="for-free"
            onChange={evt => {
              updateFields({ category: evt.currentTarget.value as 'for-free' });
            }}
            checked={category === 'for-free'}
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
