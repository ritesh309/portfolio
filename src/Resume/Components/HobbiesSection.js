import React from 'react'



function HobbiesSection() {
    return (
        <>
            <main className="container">
                <div className="row">
                    <div className="col-md mb-4">
                        {/* <!-- work experience --> */}
                        <h2 className="mb-4">Certifications</h2>
                        <ul>
                            <li>
                                <h6 className="text-primary">ReactJs,Java,Python from Udemy </h6>
                               
                            </li>
                            <li>
                                <h6 className="text-primary">Full Stack Web Development from Udemy</h6>
                                
                            </li>
                            <li>
                                <h6 className="text-primary">Data Analysis from Coursera (GOOGLE)</h6>
                                
                            </li>
                            <li>
                                <h6 className="text-primary">CPP from COURSERA </h6>
                               
                            </li>
                            <li>
                                <h6 className="text-primary">Data Analysis from Cognitive Classes (IBM)</h6>
                               
                            </li>
                        </ul>
                    </div>
                    <div className="col-md mb-5">
                        {/* <!-- education --> */}
                        <h2 className="mb-5">Achievements and Workshops </h2>
                        <ul>
                            <li>
                                <h6 className="text-primary">BrainTizer @PU 2020 </h6>
                               
                            </li>
                            <li>
                                <h6 className="text-primary">Data Analytics Workshop by L&T @ PU</h6>

                            </li>
                            <li>
                                <h6 className="text-primary">AR/VR Workshop @PU - Projections</h6>

                            </li>
                            <li>
                                <h6 className="text-primary">SuperComputer Applications Workshop @PU </h6>

                            </li>
                        </ul>
                    </div>
                </div>

            </main>
        </>
    )
}

export default HobbiesSection
