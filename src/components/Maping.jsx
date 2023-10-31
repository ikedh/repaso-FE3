import React from 'react'

const Maping = () => {

    const animales = [
        {
            id: 334,
            especie : "Perro",
            vacunas : true
        },
        {
            id: 3213,
            especie : "Gato",
            vacunas : false
        },
        {
            id: 6576,
            especie : "Perro",
            vacunas : false
        }
    ]

  return (
    <div>
        <h3>Mapeando Animales</h3>

        <ul>
            {animales.map((animal)=>{
                return(
                    <li
                        key={animal.id}
                    >
                        Especie: {animal.especie} - Vacunas: {animal.vacunas}
                    </li>
                )
            })}
        </ul>

    </div>
  )
}

export default Maping