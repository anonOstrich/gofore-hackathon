import React from 'react'

const MaritalStatusInformation = (props) => {
  const status = props.maritalStatusData.status
  const data = props.maritalStatusData.data

  return(<div>
  {data}
  </div>)
}


export default MaritalStatusInformation