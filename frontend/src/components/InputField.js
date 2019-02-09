import React from 'react'


const InputField = (props) => {
  

  return (
    <form onSubmit={props.handleSubmit}>
      <input name="name" type="text" value={props.value} onChange={props.handleChange}/>
      <button type="submit">hae</button>
    </form>
  )
}

export default InputField