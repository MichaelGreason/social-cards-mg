import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewCard from '../new-card';
import Cards from './cards.js'



export default function CardList() {
    const [cardList, setCardList] = useState(0)
    const [background, setBackground] = useState('');
    const [border, setBorder] = useState('');
    const [font, setFont] = useState(null);
    const [cardNumber, setCardNumber] = useState(1)
    
    useEffect(() => {
        axios.get(`https://social-cards-app.onrender.com/cards/${cardNumber}`, {
            headers: {
                'Authorization': 'Token fa66f9917840e2033844150df3f9bf5b96459bbb'
                }
        }).then((response) => {
            console.log(response.data)
            setCardList(response.data)
        })

        if (cardList.color === 'blue'){
            setBackground('aqua')
        }
        if (cardList.color === 'red'){
            setBackground('lightcoral')
        }
        if (cardList.color === 'green'){
            setBackground('lightgreen')
        } 
        if (cardList.border === 'dotted'){
            setBorder('dotted')
        }
        if (cardList.border === 'dashed'){
            setBorder('dashed')
        }
        if (cardList.border === 'solid'){
            setBorder('solid')
        } 
        if (cardList.font === 'delicious handrawn'){
            setFont('Delicious Handrawn')
        }
        if (cardList.font === 'playfair display') {
            setFont('Playfair Display')
        }
        if (cardList.font === 'dancing script') {
            setFont('Dancing Script')
        }
        
    }, [cardList.color, cardList.border, cardList.font, cardNumber])
    
    function nextCard() {
        console.log('clicked')
        setCardNumber(e => e += 1)
        console.log(cardNumber)
        setCardList(value => value += 1)
    }
    function previousCard() {
        console.log('clicked')
        setCardNumber(e => e -= 1)
        console.log(cardNumber)
        setCardList(value => value -= 1)
    }

    // const StyledTextArea = styled.textarea`
    //     background-color: rgba(0, 0, 0, 0);
    //     border-color: rgba(0, 0, 0, 0);
    //     overflow: auto;
    //     outline: none;
    //     // border: 1px solid black;
    //     width: 75%;
    //     height: 23rem;
    //     rows: "33";
    //     cols: "50";
    //     resize: none;
    //     font-family: ${font};
    //     font-size: 25px;
    // `
    // const StyledBackArea = styled.textarea`
    //     background-color: rgba(0, 0, 0, 0);
    //     border-color: rgba(0, 0, 0, 0);
    //     outline: none;
    //     // border: 1px solid black;
    //     width: 75%;
    //     height: 23rem;
    //     rows: "33";
    //     cols: "50";
    //     resize: none;
    //     font-family: ${font};
    //     font-size: 30px;
    //     text-align: center;
    //     margin-top: 30%        
    // `


    const TitleBox = styled.p`
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    overflow: auto;
    outline: none;
    // border: 1px solid black;
    width: 100%;
    height: 3rem;
    font-family: ${font};
    font-size: 30px;
    resize: none;
    text-align: center;
    // border-bottom: 2px solid black
    margin-top: 30%;
    `

    const BackgroundColor = styled.section`
        background: ${background};
        width: 100%;
        height: 100%;
        `
    const BorderChoice = styled.section`
        border: 5px ${border} black;  
        width: 98%;
        height: 98%;
    `

    const FontChoice = styled.section`
        font-family: ${font};
    `

    console.log(cardList)
    console.log(cardList.title_text)
    console.log(cardList.card_front_message)
    console.log(cardList.card_back_message)
    console.log(cardList.border)
    console.log(cardList.color)
    console.log(cardList.font)
    
    function openCard() {
        console.log('clicked"');
    }

    return(
        <>
    <h1>Card Feed</h1>
    <div className='card-container'>
    <div className='card'>
                <h1>COVER</h1>
            <BackgroundColor> 
                <BorderChoice>  
                    <FontChoice>      
            <div> 
                    <div className='card-back'>
                    <TitleBox placeholder='Title' id='title' name='title'>{cardList.title_text}</TitleBox>                
                    </div>
            </div>
                    </FontChoice> 
                </BorderChoice>
            </BackgroundColor>
            </div>
            </div>
<br/>
<br/>
        <p className='created-by'>
    Created By: {cardList.created_by}
        </p>
        <br/>
        <div className='navigate-cards'>
            <button onClick={previousCard}>Previous Card</button>
            <button onClick={nextCard}>Next Card</button>
        </div>
        <div className='navigate-cards'>
            <button onClick={openCard}>Open Card</button>
        </div>
    </>
    )
}