import React from 'react'
import styled from 'styled-components'
import {  InnerLayout } from '../styles/Layouts'
import ProgressBar from './ProgressBar'
import Title from './Title'
function Skills() {
    return (
        <SkillStyled>
       
                <Title title={"My Skills"} span={"My Skills"} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={"HTML"}
                            width={"80%"}
                            text={"80%"}
                        />
                        <ProgressBar
                            title={"CSS"}
                            width={"75%"}
                            text={"75%"}
                        />
                        <ProgressBar
                            title={"JavaScript"}
                            width={"70%"}
                            text={"70%"}
                        />
                        <ProgressBar
                            title={"React"}
                            width={"80%"}
                            text={"80%"}
                        />
                        <ProgressBar
                            title={"Python"}
                            width={"70%"}
                            text={"70%"}
                        />
                        <ProgressBar
                            title={"C/C++"}
                            width={"82%"}
                            text={"82%"}
                        />
                        <ProgressBar
                            title={"DSA"}
                            width={"70%"}
                            text={"70%"}
                        />
                        <ProgressBar
                            title={"MERN Stack"}
                            width={"72%"}
                            text={"72%"}
                        />
                        <ProgressBar
                            title={"Java"}
                            width={"80%"}
                            text={"80%"}
                        />

                    </div>
                </InnerLayout>
           
        </SkillStyled>
    )
}

const SkillStyled = styled.div`
  .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

`

export default Skills
