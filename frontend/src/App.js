import React, { useState } from 'react';
import NameInformation from './components/NameInformation'
import BirthYearInformation from './components/BirthYearInformation'
import nameService from './services/nameService'
import yearService from './services/yearService'
import useField, { onlyFormAttributes } from './hooks/UseField'
 

const App = () => {
  const nameField = useField('text')
  const birthYearField = useField('number')
  const [nameInfo, setNameInfo] = useState(null)
  const [birthYearInfo, setBirthYearInfo] = useState(null)
  const [waitingForResults, setWaitingForResults] = useState(false)

  const handleSubmit = async (event) => {
    setWaitingForResults(true)
    setNameInfo(null)
    setBirthYearInfo(null)
    event.preventDefault()
    if(nameField.value !== ''){
      const number = await nameService.getByName(nameField.value)
      const name =  nameField.value
      setNameInfo({name, number})
    }

    if(birthYearField.value !== ''){
      const data = await yearService.getByYear(birthYearField.value)
      setBirthYearInfo({
        year: birthYearField.value, 
        data: data
      })


    }
    nameField.clear()
    birthYearField.clear()
    setWaitingForResults(false)
  }


  const infoStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

  
  

  return (
    <div>
    <div>
    <h1>Syötä tietoja</h1>
      <form onSubmit={handleSubmit}>
        Nimi: <input {...onlyFormAttributes(nameField)} /><br/>
        Syntymävuosi: <input {...onlyFormAttributes(birthYearField)}/><br/>
        {waitingForResults ? 
          <button type="submit" disabled>hae</button> 
          : <button type="submit">hae</button>
        }
      </form>
      </div>
      { nameInfo && <NameInformation name={nameInfo.name} number={nameInfo.number}  style={infoStyle}/>} 
      { birthYearInfo && <BirthYearInformation birthYear={birthYearInfo} style={infoStyle}/>}
    </div>
  )
}

export default App;
