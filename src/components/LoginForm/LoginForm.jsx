import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/authOperations';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
        signIn({
        email: form.elements.email.value.toLowerCase(),
        password: form.elements.password.value,
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
            placeholder="Example@gmail.com"
            required
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />

      <button type="submit">
        Login
      </button>
    </form>
  );
};