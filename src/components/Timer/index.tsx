import * as S from "./styles";
import React, { useEffect, useState } from "react";

const Timer = () => {

     
  const [totalTime, setTotalTime] = useState(5);
  const minutes = Math.floor(totalTime / 60);
  const second = totalTime % 60;


  // const [systemDate, setSystemDate] = useState(0);


  function addHalfMinute() {
    setTotalTime((currentTotalTime) => currentTotalTime + 30);
    console.log(totalTime);
  }

  async function addOneMinute() {
    setTotalTime((currentTotalTime) => currentTotalTime + 1 * 60);
    console.log(totalTime);
  }

  function addFiveMinute() {
    setTotalTime((currentTotalTime) => currentTotalTime + 5 * 60);
    console.log(totalTime);
  }

  const start = () => {}

  


  useEffect(() => {
    let timer

    if(totalTime > 0){
      timer = setInterval(function () {
        console.log("Total time:", totalTime);
        
        setTotalTime(currentTotalTime => --currentTotalTime);
      }, 1000);
      // Early return
      return
    }
      
    clearInterval(timer);
    alert('É foda ser burro!');

  }, [totalTime]);

  return (
    <S.Wrapper>
      <S.Timer>
        {minutes.toString().padStart(2, "0")}
        :
        {second.toString().padStart(2, "0")}
      </S.Timer>
      <S.Config>
        <S.Button onClick={addHalfMinute}> + 30 segundos </S.Button>
        <S.Button onClick={addOneMinute}> + 01 minuto </S.Button>
        <S.Button onClick={addFiveMinute}> + 05 minutos </S.Button>
        <S.Button onClick={start}> Iniciar </S.Button>
        {/* <S.Button> Pausar </S.Button>
        <S.Button> Zerar </S.Button> */}
      </S.Config>
    </S.Wrapper>
  );
};

export default Timer;