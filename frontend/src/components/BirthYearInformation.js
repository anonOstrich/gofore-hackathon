import React from 'react'




const BirthYearInformation = (props) => {
  const birthYearData = props.birthYear
  const birthYear = birthYearData.year


  return(
    <div>
      Vuotena { birthYear } syntyneistä monet ansaitsevat paremmin kuin sinä
    </div>
  )
}


export default BirthYearInformation