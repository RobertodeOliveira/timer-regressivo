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
    box-shadow: 10px 10px;
`
export const ConfigButtonInteract = styled.div`
    margin: 1.25rem 0 1.25rem 0;
    display: flex;
    flex-direction: column;
`
export const Button = styled.button`
    padding: 0.60rem 3rem;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
    margin: 0.25rem;
    background-color: #99ffff;
    box-shadow: 5px 5px;
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
    box-shadow: 5px 5px;
    :hover {
        cursor: pointer;
        background-color:  #b3b3b3;
    } 
`