import React from 'react'
import styled from 'styled-components'
import resume from '../images/resume.png'
import PrimaryButton from './PrimaryButton'
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I'm <span> Ritesh Kumar</span></h4>
                <p className="paragraph">I'm  pursuing my Computer Science Engineering in 3rd  from PARUL UNIVERSITY. I am currently working on developing technologies for our county & Full Stack Developer inn MERN Stack .  </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Work</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Ritesh Kumar</p>
                        <p>: 20</p>
                        <p>: Indian</p>
                        <p>: Hindi,English</p>
                        <p>: Student</p>
                        <p>: India</p>
                        <p>: MERN Stack developer</p>
                    </div>
                </div>
                <a href="resume" class="">
                    <PrimaryButton title="Download CV" />
                </a>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
margin-top: 5rem;
display: flex;
.left-content{
    width: 100%;
    /* height:60vh; */
    img{
        width: 95%;
        height: 100%;
        object-fit: cover;
    }
}

.right-content{
    /* margin-left: 5rem; */

    h4{
        font-size: 2rem;
        color: var(--white-color);
        span{
            font-size: 2rem;
        }
    }
    .paragraph{
        padding:.2rem 0;
      
    }
    .about-info{
        display: flex;
        padding-bottom: 1.2rem;
        margin:0;
        .info-title{
          padding-right: 2rem;
        
          p{
              font-weight: 500;
              margin:.5px;
          }

        }
        .info-title, .info{
            p{
              padding:.3rem 0;
              margin:.5px;
            }

        }
    }

}

`
export default ImageSection
