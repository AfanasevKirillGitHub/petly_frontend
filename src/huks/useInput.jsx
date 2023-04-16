import { useValidation } from '../huks/useValidation'
import { useEffect, useState } from 'react';

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false)
    const valid = useValidation(value, validations)
    
    const onChange = (e) => {
      setValue(e.target.value)
    }

    useEffect(()=>{
      if(value === ""){
        setIsDirty(false)
      }
      else(setIsDirty(true))
    }, [value])

    return {
      value,
      onChange,
      isDirty,
      ...valid
    }
}