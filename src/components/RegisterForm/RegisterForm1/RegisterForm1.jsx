import { useState, useEffect } from "react";

export const RegisterForm1 = ({onToggle, getData}) => {
  const [formValid,setFormValid] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(()=>{
    if(password === confirmPassword && password!==''){
      setFormValid(true)
    }else{
      setFormValid(false)
    }
  },[confirmPassword,password])

  const inputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'password':
        setPassword(value);
        break;
      
      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      default:
        return;
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = await {email: form.elements.email.value.toLowerCase(),
      password: form.elements.password.value}
      getData(data)
      onToggle()
  };

  return (
  <form onSubmit={onSubmit} autoComplete="off">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        
      />

      <input
        type="password"
        value={password}
        onChange={inputChange}
        name="password"
        placeholder="Password"
          required
          minLength={6}
        />

      <input
        type="password"
        value={confirmPassword}
        onChange={inputChange}
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        minLength={6}
      />

      <button 
      disabled={!formValid ||password.length<=5 }
       type="submit">
        Next
      </button>
  </form>
  );
};
