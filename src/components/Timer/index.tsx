
import React, { useEffect, useState } from 'react';
import { Second, ConfigButtonInteract, Button, ButtonTime,Wrapper } from './styles';

function Timer() {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const second = totalTimeInSeconds % 60;

  useEffect(() => {
    let intervalId: any;
    if (isActive) {
      intervalId = setInterval(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
    if (totalTimeInSeconds === 0) {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, totalTimeInSeconds]);

  function addMiddleMinute() {
    setTotalTimeInSeconds((currentTotalTime) => currentTotalTime + 30);
    console.log(totalTimeInSeconds);
  }

  function addOneMinute() {
    setTotalTimeInSeconds((currentTotalTime) => currentTotalTime + 1 * 60);
    console.log(totalTimeInSeconds);
  }

  function addFiveMinute() {
    setTotalTimeInSeconds((currentTotalTime) => currentTotalTime + 5 * 60);
    console.log(totalTimeInSeconds);
  }

  return (
    <Wrapper>
      <Second>
        {minutes.toString().padStart(2, "0")}
        :
        {second.toString().padStart(2, "0")}
      </Second>
      <ConfigButtonInteract>
        <Button
          onClick={() => {
            setIsActive(true);
          }}
          disabled={isActive}
        >
          Start
        </Button>
        <Button
          onClick={() => {
            setIsActive(false);
          }}
          disabled={!isActive}
        >
          Stop
        </Button>
        <Button
          onClick={() => {
            setTotalTimeInSeconds(0);
          }}
          disabled={isActive}
        >
          Reset
        </Button>
      </ConfigButtonInteract>

      <ConfigButtonInteract>
        <ButtonTime onClick={addMiddleMinute}>
          +30 Segundos
        </ButtonTime>
        <ButtonTime onClick={addOneMinute}>
          +1 Minuto
        </ButtonTime>
        <ButtonTime onClick={addFiveMinute}>
          +5 Minutos
        </ButtonTime>
      </ConfigButtonInteract>
    </Wrapper>
  );
};

export default Timer;

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
//       </S.Config>
//     </S.Wrapper>
//   );
// };