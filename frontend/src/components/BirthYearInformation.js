import React from 'react'




const BirthYearInformation = (props) => {
  const birthYearData = props.birthYear
  const birthYear = birthYearData.year


  return(
    <div>
    Tietoja vuodesta {birthYear}
    </div>
  )
}


export default BirthYearInformation