import React, { useState } from 'react';
import NameInformation from './components/NameInformation'
//import nameService from './services/nameService'
import nameService from './services/__mocks__/nameService'
import useField, { onlyFormAttributes } from './hooks/UseField'
 

const App = () => {
  const nameField = useField('text')
  const birthYearField = useField('text')
  const [nameInfo, setNameInfo] = useState(null)
  const [birthdayYear, setBirthdayYear] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const number = await nameService.getByName(nameField.value)
    const name =  nameField.value
    nameField.clear()
    setNameInfo({name, number})
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
      

    </div>
  )
}

export default App;
