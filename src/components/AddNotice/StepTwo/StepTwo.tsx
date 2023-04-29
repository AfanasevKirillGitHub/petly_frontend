interface DealInfo {
  type: 'sell' | 'lostfound' | 'free';
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
  type,
  sex,
  location,
  price,
  photo,
  comments,
  updateFields,
}: StepTwoProps) => {
  return (
    <>
      <label>
        Male
        <input
          type="radio"
          name="sex"
          value="male"
          onChange={() => {
            updateFields({ sex: 'male' });
          }}
          checked={sex === 'male'}
        />
      </label>
      <label>
        Female
        <input
          type="radio"
          name="sex"
          value="female"
          onChange={() => {
            updateFields({ sex: 'female' });
          }}
          checked={sex === 'female'}
        />
      </label>
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
      {type === 'sell' && (
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
      )}
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
