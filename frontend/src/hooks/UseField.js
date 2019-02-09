import { useState } from 'react'

const useField = (type) =>{
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clear = () => {
    setValue('')
  }

  return {
    type, value, onChange, clear
  }
} 

export const onlyFormAttributes = (fieldInfo) => {
  const { onChange, value, type, ...rest } = fieldInfo
  return { onChange, value, type }
}

export default useField