import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem 5rem;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  align-items: center;
  flex-flow: column;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  background-color: #192c48;
  box-shadow: 0px 4px 3px 2px	#162b40;
  position: relative;
  gap: 3rem;
  

  ::before{
    content: '';
    position: absolute;
    background-color: #1E90FF;
    top: 110%;
    left: 0;
    width: 80%;
    height: 80%;

    transform: perspective(1) rotateX(0.22deg) scale(2.1, 0.9); 
    filter: blur(10em);
  }
 `
export const Second = styled.div`

  display: flex;
  font-size: 9rem;
  line-height: 0.7;
  font-weight: 400;
  margin: 0;
  color: #ece2e2;
  text-shadow: 2px 2px 	#1E90FF, 6px 2px 30px #1E90FF;
  padding: 2px;
`

export const ConfigButtonInteract = styled.div`
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
  display: flex;
  gap: 3rem;
`
export const Button = styled.button`
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  border: none;
  margin: 0.25rem;
  /* background-color:#489FB5; */
  background-color:#489FB5;
  box-shadow: 0px 4px 2px 0px #6969691f;
  color: white;
  padding: 8px 0;
  width: 152px;
  :hover {
    cursor: pointer; 
    box-shadow: 0px 1px 12px -1px white;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #489fb588;
  }
`
export const Divider = styled.div`
  min-height: 1px;
  width: 100%;
  background-color: #E4E4E4;
`