import React, { useState } from 'react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(true)

  const toggleVisibility = () => {
    setVisible(!visible)
  }


  const showWhenVisible = {
    display: (visible ? '' : 'none')
  }

  const hideWhenVisible = {
    display: (visible ? 'none' : '')
  }

  if(!props.children){
    return <></>
  }

  return(
  <div>
  
  {React.Children.map(props.children, c => {
    return(
    <div>
    <div onClick={toggleVisibility } style={showWhenVisible}>{c}</div>
    <div style={hideWhenVisible}><button onClick={toggleVisibility}>näytä</button></div>
    </div>
    )
    })}
  </div>
  )
}


export default Togglable