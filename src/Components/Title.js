import React from 'react'
import styled from "styled-components"
function Title( { title, span } ) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
position: relative;
h2{
    color:white;
    font-size: 3rem;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    padding-bottom:2.7rem ;
    &::before{
        content: "";
        position: absolute;
        bottom: 0;
        width: 7.4rem;
        height: .34rem;
        background-color: var(--background-light-color2);
        border-radius:14px ;
    }
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        width: 3.5rem;
        height: .34rem;
        background-color: var(--primary-color);
        border-radius:14px ;
        left: 0;
    }
    span{
        font-weight: 700;
        color:rgba(25,29,43,42);
        font-size: 4rem;
        position: absolute;
        left: 0;
        top: 20%;
        z-Index:-1;
    }
}

`
export default Title
