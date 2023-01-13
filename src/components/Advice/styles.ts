import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:hsl(218, 23%, 16%);
    width: 100%;
    height: 100vh;
`


export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: hsl(217, 19%, 38%);
    width: 600px;
    height: 400px;
` 

export const Icon = styled.button`
    display: flex;
    background:hsl(150, 100%, 66%);
    width: 60px;
    height: 60px;
    border-radius: 30px;
    z-index: 100;
    position: absolute;
    border: none;
    justify-content: center;
    align-items: center;
`