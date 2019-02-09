import React, { useState } from 'react';
import InputField from './components/InputField'
import NameInformation from './components/NameInformation'
import nameService from './services/nameService'
//import nameService from './services/__mocks__/nameService'
 

const App = () => {

  const [name, setName] = useState('')
  const [nameInfo, setNameInfo] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const number = await nameService.getByName(name)
    setNameInfo({name, number})
    console.log(nameInfo)
    setName('')
  }


  return (
    <div>
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
      { nameInfo && <NameInformation name={nameInfo.name} number={nameInfo.number}/>}
    </div>
  )
}

export default App;
