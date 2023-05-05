import { ReactComponent as MaleIcon } from '../../../helpers/icons/male.svg';
import { ReactComponent as FemaleIcon } from '../../../helpers/icons/female.svg';
import * as SC from './StepTwo.styled';
import { useEffect, useState } from 'react';

interface DealInfo {
  category: 'sell' | 'lost-found' | 'for-free';
  sex: 'male' | 'female';
  location: string;
  price: string;
  avatarURL: File | string | null;
  comments: string;
}

type StepTwoProps = DealInfo & {
  updateFields: (fields: Partial<DealInfo>) => void;
};

export const StepTwo = ({
  category,
  sex,
  location,
  price,
  avatarURL,
  comments,
  updateFields,
}: StepTwoProps) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    updateFields({ avatarURL: file });
  }, [file, updateFields]);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (name === 'avatarURL') {
      setFile(files![0] as File);
    }
  };

  // const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, files } = evt.target;
  //   switch (name) {
  //     case 'avatarURL':
  //       updateFields({ avatarURL: files![0] as File });
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (
    <>
      <SC.FieldTitle>The sex:</SC.FieldTitle>
      <SC.RadioGroup>
        <label>
          <MaleIcon />
          <SC.RadioInput
            type="radio"
            name="sex"
            value="male"
            onChange={evt => {
              updateFields({ sex: evt.currentTarget.value as 'male' });
            }}
            checked={sex === 'male'}
          />
          <SC.RadioLabelSpan>Male</SC.RadioLabelSpan>
        </label>
        <label>
          <FemaleIcon />
          <SC.RadioInput
            type="radio"
            name="sex"
            value="female"
            onChange={evt => {
              updateFields({ sex: evt.currentTarget.value as 'female' });
            }}
            checked={sex === 'female'}
          />
          <SC.RadioLabelSpan>Female</SC.RadioLabelSpan>
        </label>
      </SC.RadioGroup>

      <SC.Label>
        <SC.FieldTitle>Location:</SC.FieldTitle>
        <SC.Input
          type="text"
          value={location}
          placeholder="Type location"
          onChange={evt => {
            updateFields({ location: evt.target.value });
          }}
        />
      </SC.Label>
      {category === 'sell' && (
        <SC.Label>
          <SC.FieldTitle>Price:</SC.FieldTitle>
          <SC.Input
            type="text"
            value={price}
            placeholder="Type price"
            onChange={evt => {
              updateFields({ price: evt.target.value });
            }}
          />
        </SC.Label>
      )}
      {/* <SC.Label>
        <SC.FieldTitle>Load the pet’s image:</SC.FieldTitle>
        <SC.LoadImage>
          <SC.Plus />
        </SC.LoadImage>

        <SC.HiddenInput
          id="avatar"
          type="file"
          onChange={handleChange}
          accept="image/*,.png,.jpg,.jpeg,.webp"
          name="avatarURL"
        />
      </SC.Label> */}

      <SC.PhotoLabel>
        <SC.PhotoTitle>Add photo and some comments</SC.PhotoTitle>
        <SC.LoadImage>
          {!file ? (
            <SC.Plus />
          ) : (
            <SC.PetImg alt="My pet" src={URL.createObjectURL(file)} />
          )}
        </SC.LoadImage>
        <SC.InputImage
          type="file"
          name="avatarURL"
          alt="Pet image"
          onChange={handelChange}
          accept="image/*,.png,.jpg,.jpeg,.webp"
        />
      </SC.PhotoLabel>

      <SC.Label>
        <SC.FieldTitle>Comments:</SC.FieldTitle>
        <SC.Textarea
          name="comments"
          value={comments}
          placeholder="Type comment"
          onChange={evt => {
            updateFields({ comments: evt.target.value });
          }}
        />
      </SC.Label>
    </>
  );
};
