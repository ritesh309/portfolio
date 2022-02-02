import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../Components/PrimaryButton';
import Title from '../Components/Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactItem from '../Components/ContactItem';
function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={"Contact"} span={"Contact"} />
            <ContactStyled>
                <InnerLayout className={"contact-section"}>
                    <div className="left-contact">
                        <div className="contact-title">
                            <h4>Get in touch with us !</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name" id="name">Enter Your Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" id="email">Enter Your Email</label>
                                <input type="email" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="phone" id="email">Enter Your Phone</label>
                                <input type="number" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject" id="subject">Enter Your Subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area" id="">Enter Your Text</label>
                                <textarea id="textarea" name="textarea" cols="30" rows="7" />
                            </div>
                            <div className="form-field">
                                <PrimaryButton title={"Send Email"} />
                            </div>
                        </form>
                    </div>
                    <div className="right-contact">
                        <ContactItem icon={phone} title={"Phone"} contact1={"+918960029295"} contact2={"+917275959295"} />
                        <ContactItem icon={email} title={"Email"} contact1={"riteshkr9592@gmail.com"} contact2={"riteshkr95929295@gmail.com"} />
                        <ContactItem icon={location} title={"Location"} contact1={"Haiderganj , PIN : 224205"} contact2={"Ayodhya UP"} />
                    </div>
                </InnerLayout>
            </ContactStyled>
        </MainLayout>
    )
}
const ContactStyled = styled.section`
.contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.5rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
            
        }
    }

`;
export default ContactPage
