import { useEffect, useState } from 'react';
import { Second, ConfigButtonInteract, Button, ButtonTime,Wrapper, Container } from './styles';

function Timer() {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const second = totalTimeInSeconds % 60;

  // function playSound() {
  //   const audio = new Audio(`https://youtu.be/9b-m4bJ89pI`);
  //   audio.play();
  // }

  useEffect(() => {
    let intervalId: any;
    if (isActive) {
      intervalId = setInterval(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
    if (totalTimeInSeconds === 0) {
      alert('Chegou ao fim')
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
        <Container>
            <ConfigButtonInteract>
              <Button
                onClick={() => {
                  setIsActive(true);
                }}
                disabled={isActive}
                >
                START
              </Button>
              <Button
                onClick={() => {
                  setIsActive(false);
                }}
                disabled={!isActive}
                >
                STOP
              </Button>
              <Button
                onClick={() => {
                  setTotalTimeInSeconds(0);
                }}
                disabled={isActive}
                >
                RESET
              </Button>
            </ConfigButtonInteract>
            <ConfigButtonInteract>
                <ButtonTime onClick={addMiddleMinute} disabled={isActive}>  
                +30 SECOND
              </ButtonTime>
        
              <ButtonTime onClick={addOneMinute} disabled={isActive}>
                +1 MINUTE
              </ButtonTime>
              <ButtonTime onClick={addFiveMinute} disabled={isActive}>
                +5 MINUTES
              </ButtonTime>
            </ConfigButtonInteract>
          </ Container>
    </Wrapper>
  );
};

export default Timer;