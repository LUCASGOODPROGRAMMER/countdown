import { useState, useEffect } from 'react';

const useCountdown = (initialDate) => {
  const [targetDate, setTargetDate] = useState(new Date(initialDate));
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const countdown = () => {
      const dataFutura = targetDate.getTime();
      const dataAtual = new Date().getTime();
      const distancia = dataFutura - dataAtual;

      if (distancia <= 0) {
        // Atualiza para 1º de janeiro do próximo ano
        const proximoAno = targetDate.getFullYear() + 1;
        setTargetDate(new Date(`Jan 1, ${proximoAno} 00:00:00`));
        return;
      }

      const SEGUNDO = 1000;
      const MINUTO = SEGUNDO * 60;
      const HORA = MINUTO * 60;
      const DIA = HORA * 24;

      const diasRestantes = Math.floor(distancia / DIA);
      const horasRestantes = Math.floor((distancia % DIA) / HORA);
      const minutosRestantes = Math.floor((distancia % HORA) / MINUTO);
      const segundosRestantes = Math.floor((distancia % MINUTO) / SEGUNDO);

      setDias(diasRestantes);
      setHoras(horasRestantes);
      setMinutos(minutosRestantes);
      setSegundos(segundosRestantes);
    };

    const intervalo = setInterval(countdown, 1000);
    return () => clearInterval(intervalo);
  }, [targetDate]);

  // No final do hook
return [dias, horas, minutos, segundos, targetDate.getFullYear()];

};

export default useCountdown;
