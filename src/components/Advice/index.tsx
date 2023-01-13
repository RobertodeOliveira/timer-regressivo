import * as S from './styles'
import axios from 'axios'
import { useState, useEffect } from 'react' 

// export type ConselhosProps = {
//     advice: string


const Advice = () => { 
    // const url = 'https://api.adviceslip.com/advice'
    
    const [ advice, setAdvice ] = useState([])

    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => { 
        console.log(response.data)
        })
        .catch(() => {
        console.log('Deu tudo errado')
        })


    }, [])

    // const loadingElement = document.querySelector('#loading');
    // const postsContainer = document.querySelector('posts-container')

    //GET TODOS OS POSTS
    // async function getAllPosts() {
    //     const response = await fetch(url) 
    //     console.log(response)
    //  const data = await response.json()
    //  console.log(data)
     
    // }

    // const result = getAllPosts()
    return(
        <S.Wrapper>
        <S.Container></S.Container>
        <S.Icon>
            <img src="/img/icon-btn.svg" alt="" />
            </S.Icon>
        </S.Wrapper>
    )
}

export default Advice