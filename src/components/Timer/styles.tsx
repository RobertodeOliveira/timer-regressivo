import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`
export const Second = styled.h1`
  background-color #99ffff;
  padding: 2rem 6rem;
  font-size: 6.25rem;
  font-weight: 400;    
  border-radius: 15px;
  box-shadow: 0px 10px 8px 0px #696969;
`
export const ConfigButtonInteract = styled.div`
    margin: 1.25rem 0 1.25rem 0;
    display: flex;
    flex-direction: column;

`

export const  Container = styled.div`
  display: flex;
  gap: 3rem;
`

export const Button = styled.button`
  padding: 0.60rem 2.75rem;
  border-radius: 10px;
  border: 1px solid #FFFFFF;
  margin: 0.25rem;
  background-color: #99ffff;
  box-shadow: 0px 10px 8px 0px #696969;
  :hover {
      cursor: pointer; 
      background-color:  #b3b3b3;
  }
`
export const ButtonTime = styled.button`
  padding: 0.60rem 1.25rem;
  border-radius: 10px;
  border: 1px solid #FFFFFF;
  margin: 0.25rem;
  background-color: #99ffff;
  box-shadow: 0px 10px 8px 0px #696969;
  :hover {
      cursor: pointer;
      background-color:  #b3b3b3;
  } 
`