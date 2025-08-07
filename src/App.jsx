//components
import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar';

import { useContext } from 'react';

import { CountdownContext } from './context/CountDownContext';

//assets
import Fundo from './assets/fundo.png'



// estilos
import './App.css'



function App() {
  const {event} = useContext(CountdownContext)

  let eventImage = null

  if(event) eventImage = event.imagem

  return (
    <>
      <NavBar/>
      <div className="App" style={
        eventImage
        ? {backgroundImage: `url(${eventImage})`}
        : { backgroundImage: `url(${Fundo})` }
      }>
        <div className="container">
          <Outlet/>
        </div>
      </div>
    </>
  );
}


export default App
