import React from 'react'
import styled from 'styled-components'

import { InnerLayout } from "../styles/Layouts"
import ServiceCard from './ServiceCard'
import Title from './Title'
import ai from "../images/ai.png"
import webdev from "../images/webdev.png"
function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={'Services'} />
                <div className="services">

                    <ServiceCard image={webdev} title={"Web Design"} paragraph={"Lerem Impus is the best thing for the Internet in dummy world need not to think about it again and so far."} />

                    <ServiceCard image={ai} title={"Artificial Intelligence"} paragraph={"AI  is the best thing for the Internet in dummy world need Lerem Impus is the best thing for the Internet  "} />


                </div>

            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.div`
 .services{
     margin-top:5rem;
      display: flex;
      justify-content: space-between;
     
    }
   
`
export default ServicesSection
