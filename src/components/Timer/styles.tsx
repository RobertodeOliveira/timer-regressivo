import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #333333;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    font-size: 130px;
`

export const Timer = styled.p`
  display: flex;
  justify-content: center;
  width: 500px;
  background-color: #f0f0f5;
  color: black;
  border-radius: 15px;
`

export const Config = styled.div`
  display: flex;
  max-width: 400px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  
` 

export const Button = styled.button`
    border: none;
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #bfbfbf;
    :hover{
      background-color: #47d147;
      cursor: pointer;
    }
    
`