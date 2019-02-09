import React from 'react'

const NameInformation = (props) => {

  return(
    <div style={props.style}>
    <p>Nimellä {props.name} on elossa {props.number} henkilöä vuonna 2019.</p>
    </div>
  )
}


export default NameInformation