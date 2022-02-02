import React from 'react'
import profileImage from  "../../images/Images_Resume/Profile_image.jpg" ;

function Header() {
    return (
        <>
            <header class="bg-dark bg-gradient text-white py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 text-left text-md-center mb-3 ">
                            <img class="rounded img-fluid mt-3" width={140} height={100} src={profileImage} alt="Profile" />
                        </div>
                        <div class="col-md-9 mt-3">
                            <h1>Ritesh Kumar</h1>
                            <h5>Intern Web Developer at ORENA SOLUTIONS</h5>
                            <p class="border-top pt-3">I am Full Stack developer in MERN-Stack having experience of more than 8-months in Web Technologies as HTML,CSS,JS,ReactJs,NodeJs,ExpressJs,PHP,SQL and working on Research in thrust areas of ML and AI.   </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
