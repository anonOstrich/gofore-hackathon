import React, { useState } from 'react';
import NameInformation from './components/NameInformation'
import BirthYearInformation from './components/BirthYearInformation'
//import nameService from './services/nameService'
import nameService from './services/__mocks__/nameService'
import useField, { onlyFormAttributes } from './hooks/UseField'
 

const App = () => {
  const nameField = useField('text')
  const birthYearField = useField('number')
  const [nameInfo, setNameInfo] = useState(null)
  const [birthYearInfo, setBirthYearInfo] = useState(null)

  const handleSubmit = async (event) => {
    setNameInfo(null)
    setBirthYearInfo(null)
    event.preventDefault()
    if(nameField.value != ''){
      const number = await nameService.getByName(nameField.value)
      const name =  nameField.value
      setNameInfo({name, number})
    }

    if(birthYearField.value !== ''){
      setBirthYearInfo(birthYearField.value)
    }
    nameField.clear()
    birthYearField.clear()
  }


  return (
    <div>
    <div>
    <h1>Syötä tietoja</h1>
      <form onSubmit={handleSubmit}>
        Nimi: <input {...onlyFormAttributes(nameField)} /><br/>
        Syntymävuosi: <input {...onlyFormAttributes(birthYearField)}/><br/>
        <button type="submit">hae</button>
      </form>
      </div>
      { nameInfo && <NameInformation name={nameInfo.name} number={nameInfo.number}/>}
      { birthYearInfo && <BirthYearInformation birthYear={birthYearInfo}/>}
      

    </div>
  )
}

export default App;
