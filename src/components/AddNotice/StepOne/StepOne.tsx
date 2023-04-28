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
      <p>
        Don't wait any longer, give your furry friend the care and love they
        deserve by adding them to our family today!
      </p>
      <input
        type="radio"
        name="type"
        value="sell"
        onChange={evt => {
          updateFields({ type: 'sell' });
        }}
        checked={type === 'sell'}
      />
      <input
        type="radio"
        name="type"
        value="lostfound"
        onChange={evt => {
          updateFields({ type: 'lostfound' });
        }}
        checked={type === 'lostfound'}
      />
      <input
        type="radio"
        name="type"
        value="free"
        onChange={evt => {
          updateFields({ type: 'free' });
        }}
        checked={type === 'free'}
      />
      <label>
        Tittle of ad
        <input
          type="text"
          value={title}
          onChange={evt => {
            updateFields({ title: evt.target.value });
          }}
        />
      </label>
      <label>
        Name pet
        <input
          type="text"
          value={name}
          onChange={evt => {
            updateFields({ name: evt.target.value });
          }}
        />
      </label>
      <label>
        Date of birth
        <input
          type="date"
          value={date}
          onChange={evt => {
            updateFields({ date: evt.target.value });
          }}
        />
      </label>
      <label>
        Breed
        <input
          type="text"
          value={breed}
          onChange={evt => {
            updateFields({ breed: evt.target.value });
          }}
        />
      </label>
    </>
  );
};
