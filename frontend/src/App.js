import React, { useState } from 'react';
import NameInformation from './components/NameInformation'
import Togglable from './components/Togglable'
import BirthYearInformation from './components/BirthYearInformation'
import MaritalStatusInformation from './components/MaritalStatusInformation'
import nameService from './services/nameService'
import maritalService from './services/maritalService'
import useField, { onlyFormAttributes } from './hooks/UseField'

 

const MaritalStatusField = ({onChange, value}) => {

  const isChecked = (idx) => {
    return Number(value) === idx; 
  }
  
  return (
    <div>
    <input type="radio" name="maritalStatus" value="0" onChange={onChange} checked={isChecked(0) }/>Aviopuoliso, ei lapsia<br/>
    <input type="radio" name="maritalStatus" value="1" onChange={onChange} checked={isChecked(1) }/>Aviopuoliso, ja lapsia<br/>
    <input type="radio" name="maritalStatus" value="2" onChange={onChange} checked={isChecked(2) }/>Avopuoliso, ei lapsia<br/>
    <input type="radio" name="maritalStatus" value="3" onChange={onChange} checked={isChecked(3)}/>Avopuoliso, ja lapsia<br/>
    <input type="radio" name="maritalStatus" value="4" onChange={onChange} checked={isChecked(4)}/>Vanhempi, ei puolisoa<br/>
    <input type="radio" name="maritalStatus" value="5" onChange={onChange} checked={isChecked(5)}/>Lapsi<br/>
    <input type="radio" name="maritalStatus" value="6" onChange={onChange} checked={isChecked(6)}/>Perheisiin kuulumaton, asuu yksin<br/>
    <input type="radio" name="maritalStatus" value="7" onChange={onChange} checked={isChecked(7)}/>Perheisiin kuulumaton, ei asu yksin<br/>
    </div>
  )
}

const App = () => {
  const nameField = useField('text')
  const birthYearField = useField('number')
  const [nameInfo, setNameInfo] = useState(null)
  const [birthYearInfo, setBirthYearInfo] = useState(null)
  const [maritalStatusData, setMaritalStatusData] = useState(null)
  const [waitingForResults, setWaitingForResults] = useState(false)
  const [maritalStatusValue, setMaritalStatusValue] = useState(null)

  const handleSubmit = async (event) => {
    setWaitingForResults(true)
    setNameInfo(null)
    setBirthYearInfo(null)
    setMaritalStatusData(null)
    event.preventDefault()
    if(nameField.value !== ''){
      const number = await nameService.getByName(nameField.value)
      const name =  nameField.value
      setNameInfo({name, number})
    }

    if(birthYearField.value !== '' && maritalStatusValue !== ''){
      const data = await maritalService.getByYearAndStatus(birthYearField.value, maritalStatusValue)
      setBirthYearInfo({
        year: birthYearField.value, 
      })

      setMaritalStatusData({
        status: maritalStatusValue,
        data: data
      })
    }

    nameField.clear()
    birthYearField.clear()
    setMaritalStatusValue(null)
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
        <div class="form-group">
          <label for="name">Nimi:</label><br/>
          <input {...onlyFormAttributes(nameField)} /><br/>
        </div>
        <div class="form-group">
          <label for="birthyear">Syntymävuosi:</label><br/>
          <input {...onlyFormAttributes(birthYearField)}/><br/>
        </div>
        <div class ="form-group">
          <label>Marital status</label>
          <MaritalStatusField value={maritalStatusValue} onChange={(event) => {
            setMaritalStatusValue(event.target.value)
          }}/>
        </div>

        {waitingForResults ? 
          <button type="submit" disabled>Hae</button> 
          : <button type="submit">Hae</button>
        }
        <br/>
      </form>
      </div>
      <Togglable>
        { nameInfo && <NameInformation name={nameInfo.name} number={nameInfo.number}  style={infoStyle}/>} 
      </Togglable>
      <Togglable>
        { birthYearInfo && <MaritalStatusInformation maritalStatusData={maritalStatusData} style={infoStyle}/>}
      </Togglable>
    </div>
  )
}

export default App;
