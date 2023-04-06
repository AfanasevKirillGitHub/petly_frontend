import { RegisterForm1 } from "../../components/RegisterForm/RegisterForm1/RegisterForm1";
import { RegisterForm2 } from "../../components/RegisterForm/RegisterForm2/RegisterForm2";
import { useState } from "react";

export const RegisterPage = () => {
  const [Step1, setStep1] = useState(true);
  const [dataForm1, setDataForm1] = useState({}) 

  const toggleForm = () => {
    setStep1(!Step1)       
  }

  const getDataForm1 = (data) => {
    setDataForm1(data)
  }
  return (
    <>
    {Step1 ? <RegisterForm1 getData={getDataForm1} onToggle={toggleForm}/> : <RegisterForm2 dataForm1={dataForm1} onToggle={toggleForm}/>}
    </>
  );
};
