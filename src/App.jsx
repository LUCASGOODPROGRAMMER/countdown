//components
import Title from './components/Title'
import Counter from './components/Counter'

//assets
import Fundo from './assets/fundo.png'

import useCountdown from './hooks/useCountDown'

// estilos
import './App.css'

function App() {
  const [dias, horas, minutos, segundos, anoAlvo] = useCountdown("Jan 1, 2026 00:00:00");

  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${Fundo})` }}>
        <div className="container">
          <Title title={`Contagem regressiva para ${anoAlvo}`} />
          <div className="countdown-container">
            <Counter title="dias" number={dias} />
            <Counter title="horas" number={horas} />
            <Counter title="minutos" number={minutos} />
            <Counter title="segundos" number={segundos} />
          </div>
        </div>
      </div>
    </>
  );
}


export default App
