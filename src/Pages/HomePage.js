import React from 'react'
import styled from "styled-components"
import Particle from '../Components/Particle'
import FacebookIcon from "@material-ui/icons/Facebook"
import GithubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1> Hi, I'm <span> Ritesh Kumar </span></h1>
                <p>I'm pursuing my Computer Science Engineering in 3rd from PARUL UNIVERSITY. I am currently working on developing technologies for our county & Full Stack Developer inn MERN Stack .
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/ritesh9592/" target="_blank" rel="noreferrer" className=" icon i-facebook"><FacebookIcon /></a>
                    <a href="https://github.com/ritesh309" target="_blank" rel="noreferrer" className=" icon i-github"><GithubIcon /></a>
                    <a href="https://www.linkedin.com/in/ritesh-kumar-b240731a7/" target="_blank" rel="noreferrer" className="icon i-linked"><LinkedInIcon /></a>
                    <a href="https://www.instagram.com/_rit_s_/" target="_blank" rel="noreferrer" className="icon i-instagram"><InstagramIcon /></a>
                </div>
            </div>

        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
width: 100%;
height: 100vh;
position: relative;

.p-particles-js{
    position: absolute;
    top: 0;
    left: 0;
}

.typography{
    position: absolute;
    text-align: center;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80%;

    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            &:hover{
              border:2px solid var(--primary-color); 
              color:var(--primary-color);
              transition:all .4 ease-in-out;
            }
            &:not(:last-child){
                margin-right:1rem;
                
            }
            svg{
              margin: .6rem;
            }
        }
        .i-linked{
            &:hover{
                border: 2px solid ;
                color: #0077b5;
            }
         
        }
        .i-instagram{
            &:hover{
                border: 2px solid ;
                color:#8a3ab9 ;
            }
           
        }
        .i-github{
            &:hover{
                border: 2px solid ;
                color:green;
            }
          
        }
    }

}



`

export default HomePage
