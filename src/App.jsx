import './App.css'
import Formulario from './components/Formulario'
import ComponenteHijo from './components/ComponenteHijo'
import { useState } from 'react'
import Padre from './components/Padre'
import Hijo from './components/Hijo'
import Hermano from './components/Hermano'
import Maping from './components/Maping'

function App() {

  const [dato, setDato] = useState("soy la prop inicial")

  return (
    <>  
      <h1>Repaso General</h1>
      <Formulario />
      <ComponenteHijo 
        dato={dato}
      />

      <Padre>
        <Hijo />
      </Padre>


      <Padre>
        <Hermano />
      </Padre>


      <Maping/>
    </>
  )
}

export default App
