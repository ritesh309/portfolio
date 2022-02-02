import React from 'react'
import styled from 'styled-components'
function PrimaryButton( { title } ) {
    return (
        <PrimaryButtonStyled>
            {title}
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
background-color: var(--primary-color);
padding:0.8rem 2.5rem;
color: white;
display: inline-block;
cursor: pointer;
font-size: inherit;
text-transform: uppercase;
margin-top: 1rem;
position: relative;
transition: all .4s ease-in-out;
&::after{
    content: "";
    position: absolute;
    width: 0;
    left: 0;
    bottom: 0;
    opacity: 0.8;
    height: .5rem;
    transition: all .4s ease-in-out;
}
&:hover::after{
    color:black ;
    background-color:lightcyan;
    width: 100%;
 

}

`

export default PrimaryButton
