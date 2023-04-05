import { useDispatch } from 'react-redux';
import { signUp } from "../../../redux/auth/authOperations";

export const RegisterForm2 = ({onToggle, dataForm1}) => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
        signUp({
        ...dataForm1,
        name: form.elements.name.value,
        city: form.elements.city.value,
        phone: form.elements.phone.value,
      })
    );
    
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <input
            id="city"
            type="text"
            name="city"
            placeholder="City, Region"
            required
          />

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Mobile Phone"
            required
          />


      <button type="submit">Registration</button>
      <button onClick={onToggle} type="button">Back</button>
    </form>
  );
};