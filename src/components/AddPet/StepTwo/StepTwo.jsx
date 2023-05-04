import { useEffect, useState } from 'react';
import * as SC from './StepTwo.styled';

export const StepTwo = ({ photo, comments, updateFields }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    updateFields({ photo: file });
  }, [file, updateFields]);

  const handelChanhe = e => {
    const { name, files } = e.target;

    if (name === 'photo') {
      setFile(files[0]);
    }
  };

  return (
    <SC.LabelsWrapper>
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
          name="photo"
          alt="Pet image"
          onChange={handelChanhe}
          accept="image/*,.png,.jpg,.jpeg,.webp"
        />
      </SC.PhotoLabel>

      <SC.Label>
        Comments
        <SC.Comments
          placeholder="Type comments"
          rows="3"
          wrap="off"
          spellCheck="true"
          name="comments"
          value={comments}
          onChange={e => {
            updateFields({ comments: e.target.value });
          }}
        />
      </SC.Label>
    </SC.LabelsWrapper>
  );
};
