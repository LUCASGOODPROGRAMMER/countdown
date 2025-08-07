import Title from '../components/Title'
import Counter from '../components/Counter'
import { Navigate } from 'react-router-dom'

import { useContext } from 'react'

import useCountdown from '../hooks/useCountDown'

import { CountdownContext } from '../context/CountDownContext'



const Countdown = () => {
  const { event } = useContext(CountdownContext)

  if (!event) return <Navigate to="/" />

  const {titulo, data} = event

  const [dias, horas, minutos, segundos, anoAlvo] = useCountdown(data);
  return (
    <>
      <Title title={titulo} />
      <div className="countdown-container">
        <Counter title="dias" number={dias} />
        <Counter title="horas" number={horas} />
        <Counter title="minutos" number={minutos} />
        <Counter title="segundos" number={segundos} />
      </div>

      {/**
        * <Title title={`Contagem regressiva para ${anoAlvo}`} />
      <div className="countdown-container">
        <Counter title="dias" number={dias} />
        <Counter title="horas" number={horas} />
        <Counter title="minutos" number={minutos} />
        <Counter title="segundos" number={segundos} />
      </div>
        */}
    </>
  )
}

export default Countdown