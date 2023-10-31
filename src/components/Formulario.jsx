import React, { useState } from 'react'


const Formulario = () => {

    const [nombre , setNombre] = useState("")
    
  return (
    <div>
        <form>
            
            <label>Nombre: {nombre}</label>
            <input
                type='text'
                placeholder='Ingresar Nombre'
                value={nombre}
                onChange={e=>{setNombre(e.target.value)}}
            />

            <label>Nombre:</label>
            <input
                type='text'
                placeholder='Ingresar Nombre'
            />
            <label>Nombre:</label>
            <input
                type='text'
                placeholder='Ingresar Nombre'
            />
            <label>Nombre:</label>
            <input
                type='text'
                placeholder='Ingresar Nombre'
            />
            
        </form>
    </div>
  )
}

export default Formulario