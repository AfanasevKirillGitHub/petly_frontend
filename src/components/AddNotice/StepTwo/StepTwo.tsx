interface DealInfo {
  sex: 'male' | 'female';
  location: string;
  price: string;
  photo: string;
  comments: string;
}

type StepTwoProps = DealInfo & {
  updateFields: (fields: Partial<DealInfo>) => void;
};

export const StepTwo = ({
  sex,
  location,
  price,
  photo,
  comments,
  updateFields,
}: StepTwoProps) => {
  return (
    <>
      <input
        type="radio"
        name="sex"
        value="male"
        onChange={evt => {
          updateFields({ sex: 'male' });
        }}
        checked={sex === 'male'}
      />
      <input
        type="radio"
        name="sex"
        value="female"
        onChange={evt => {
          updateFields({ sex: 'female' });
        }}
        checked={sex === 'female'}
      />
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={evt => {
            updateFields({ location: evt.target.value });
          }}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={evt => {
            updateFields({ price: evt.target.value });
          }}
        />
      </label>
      <label>
        Load the pet’s image:
        <input
          type="file"
          value={photo}
          onChange={evt => {
            updateFields({ photo: evt.target.value });
          }}
        />
      </label>
      <label>
        Comments:
        <input
          type="textarea"
          value={comments}
          onChange={evt => {
            updateFields({ comments: evt.target.value });
          }}
        />
      </label>
    </>
  );
};
