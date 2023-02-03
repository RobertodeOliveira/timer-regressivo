// import * as S from "./styles";
// import React, { useEffect, useState } from "react";

// const Timer = () => {

     
//     const [totalTime, setTotalTime] = useState(5);
//     const minutes = Math.floor(totalTime / 60);
//     const second = totalTime % 60;

//   function addMiddleMinute() {
//     setTotalTime((currentTotalTime) => currentTotalTime + 30);
//     console.log(totalTime);
//   }

//   function addOneMinute() {
//     setTotalTime((currentTotalTime) => currentTotalTime + 1 * 60);
//     console.log(totalTime);
//   }

//   function addFiveMinute() {
//     setTotalTime((currentTotalTime) => currentTotalTime + 5 * 60);
//     console.log(totalTime);
//   }

//   useEffect(() => {
//     if (totalTime > 0) {
//       const timer = setTimeout(() => {
//           setTotalTime((currentTotalTime) => currentTotalTime - 1);
//           console.log("-1");
//         }, 1000);
//         return () => {
//             clearTimeout(timer); 
//         };  
//     } else {
//         alert('Acabou o Tempo')
//     }
//   }, [totalTime]);
//   return (
//     <S.Wrapper>
//       <S.Timer>
//         {minutes.toString().padStart(2, "0")}
//         :
//         {second.toString().padStart(2, "0")}
//       </S.Timer>
//       <S.Config>
//         <S.Button onClick={addMiddleMinute}> + 30 segundos </S.Button>
//         <S.Button onClick={addOneMinute}> + 01 minuto </S.Button>
//         <S.Button onClick={addFiveMinute}> + 05 minutos </S.Button>
//         <S.Button> Iniciar </S.Button>
//         <S.Button> Pausar </S.Button>
//         <S.Button> Zerar </S.Button>
//       </S.Config>
//     </S.Wrapper>
//   );
// };
 
// export default Timer;

import  { useState, useEffect } from 'react';

function Cronometro() {
  // Inicializa o estado do cronômetro
  const [time, setTime] = useState(5);
  const [isRunning, setIsRunning] = useState(false);

  // Inicia um intervalo de tempo que atualiza o estado do cronômetro a cada segundo
  useEffect(() => {
    let intervalId: any;
    if (time > 0) {
      if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);}} 
    else {
      // clearInterval(intervalId);
      console.log('O tempo acabou')
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Função para iniciar o cronômetro
  function handleStart() {
    setIsRunning(true);
  }

  // Função para pausar o cronômetro
  function handlePause() {
    setIsRunning(false);
  }

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handlePause}>Pausar</button>
    </div>
  );
}

export default Cronometro;