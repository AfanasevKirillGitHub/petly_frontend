import * as SC from './StepTwo.styled';

export const StepTwo = ({ photo, comments, updateFields }) => {
  return (
    <SC.LabelsWrapper>
      <SC.PhotoLabel>
        <SC.PhotoTitle>Add photo and some comments</SC.PhotoTitle>
        <SC.LoadImage>
          <SC.Plus />
        </SC.LoadImage>
        <SC.InputImage
          type="file"
          name="photo"
          alt="Pet image"
          value={photo}
          onChange={e => {
            updateFields({ photo: e.target.value });
          }}
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
          onChange={e => {
            updateFields({ comments: e.target.value });
          }}
        />
      </SC.Label>
    </SC.LabelsWrapper>
  );
};
