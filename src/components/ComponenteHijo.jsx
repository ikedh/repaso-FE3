import React from 'react'

const ComponenteHijo = ({dato}) => {
  return (
    <div>
        <h4>Soy el componente que recibe las Props : {dato} </h4>
    </div>
  )
}

export default ComponenteHijo