import { useEffect, useState } from 'react';
import * as S from './styles';

function Timer() {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const second = totalTimeInSeconds % 60;


  function playSound() {
    const song: HTMLAudioElement = new Audio('./song.mp3')

    song.play();
  }

  useEffect(() => {
    let intervalId: any;
    if (isActive) {
      intervalId = setInterval(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
    if (totalTimeInSeconds === 0) {
      clearInterval(intervalId);
      playSound()
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
    <S.Wrapper>
      <S.Second>
        {minutes.toString().padStart(2, "0")}
        :
        {second.toString().padStart(2, "0")}
      </S.Second>
      <S.Divider/>
      <S.Container>
        <S.ConfigButtonInteract>
          <S.Button
            onClick={() => {
              setIsActive(true);
            }}
            disabled={isActive}
            >
            START
          </S.Button>
          <S.Button
            onClick={() => {
              setIsActive(false);
            }}
            disabled={!isActive}
            >
            STOP
          </S.Button>
          <S.Button
            onClick={() => {
              setTotalTimeInSeconds(0);
            }}
            disabled={isActive}
            >
            RESET
          </S.Button>
        </S.ConfigButtonInteract>
        <S.ConfigButtonInteract>
            <S.Button onClick={addMiddleMinute} disabled={isActive}>  
            +30 SECOND
          </S.Button>
          <S.Button onClick={addOneMinute} disabled={isActive}>
            +1 MINUTE
          </S.Button>
          <S.Button onClick={addFiveMinute} disabled={isActive}>
            +5 MINUTES
          </S.Button>
        </S.ConfigButtonInteract>
      </S.Container>
    </S.Wrapper>
  );
};

export default Timer;