import React from 'react'
import styled from 'styled-components'
function ReviewItem( { text } ) {
    return (
        <ReviewItemStyled>
            <p>{text}</p>
        </ReviewItemStyled>
    )
}
const ReviewItemStyled = styled.div`
height:15vh;
padding:1.5rem 1.5rem;
border-left: 8px solid var(--border-color);
background-color:var(--background-dark-color2);
position: relative;
width:50%;
&:not(:first-child){
    margin-left:2rem;
&::after{
    content: " ";
    position: absolute;
    left: 1rem;
    border-width: .8rem;
    top:100%;
    border-style: solid;
    border-color: var(--background-dark-color2) transparent transparent var(--background-dark-color2);
}
   p{ 
      padding:0.3rem .5rem
    }
 
}



`

export default ReviewItem
