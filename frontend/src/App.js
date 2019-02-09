import React, { useState } from 'react';
import InputField from './components/InputField'
 

const App = () => {

  const [name, setName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name)
    setName('')
  }


  return (
    <div>
    <h1>Anna nimi</h1>
      <InputField
      handleSubmit={handleSubmit}
      handleChange={(event) => {
        setName(event.target.value)
      }}
      value={name}
      />
    </div>
  )
}

export default App;
