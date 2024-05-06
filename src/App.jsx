import { useState } from 'react'
import './App.css'
import { SheepList } from './SheepList';

function App() {
  const [contador,setContador]= useState(0);

  const incrementar=()=>{
    setContador(contador +1);
  }

  return (
    <>
    <h3>Contador de Ovejas</h3>
    <h4>{contador}</h4>
    <button onClick={incrementar}>Contar</button>
    <SheepList tamaño={contador}/>
      
        
    </>
  )
}

export default App
