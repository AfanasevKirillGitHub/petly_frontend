import { useEffect, useState } from 'react';


export const useValidation = (value, validations) => {
    const [minLengthError, setMinLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    
      useEffect(() => {
        for (const validation in validations) {
          switch (validation) {
              case 'minLength':
                value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                break;
              case 'isEmail':
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                break
              default: console.log("нет такой проверки")
    
          }
        }
      }, [value, validations])
    
      return {
        minLengthError,
        emailError
      }
    }