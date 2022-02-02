import React from 'react'
import Title from '../Components/Title.js'
// import Resume from '../Components/Resume'
import Resume from '../Resume/Resume.js'
// import Skills from '../Components/Skills'
import {  MainLayout } from '../styles/Layouts'


function ResumePage() {
    return (
        <>
            <MainLayout >
                <Title title={'Resume'} span={'Resume'} />
                <br></br>
                <br></br>
                <Resume />
            </MainLayout>
        </>
    )
}

export default ResumePage
