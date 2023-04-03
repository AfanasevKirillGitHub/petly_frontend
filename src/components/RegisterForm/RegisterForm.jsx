import { useDispatch } from 'react-redux';
import { signUp } from "../../redux/auth/authOperations";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
        signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        city: form.elements.city.value,
        phone: form.elements.phone.value,
      })
    );
    
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />

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


      <button type="submit">
        Registration
      </button>
    </form>
  );
};