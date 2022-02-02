import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

import image1 from '../../images/Images_Resume/Screenshot1.png';
import image2 from '../../images/Images_Resume/Screenshot_2.png';
import image3 from '../../images/Images_Resume/Screenshot_3.png';
import image4 from '../../images/Images_Resume/Screenshot_4.png';

function Main() {
    return (
        <>
            <main className="container">
                <div className="row">
                    <div className="col-md mb-4">
                        {/* <!-- work experience --> */}
                        <h2 className="mb-4">Work Experience</h2>
                        <ul>
                            <li>
                                <h6 className="text-primary">Junior Web Developer</h6>
                                <p>Got to work with a team of 4 members to make ACADEMY WEBSITE.
                                    That was a great experience working in a team .We did it in 2 months .
                                    Mostly I was concen with the backend part.
                                </p>
                            </li>
                            <li>
                                <h6 className="text-primary">Android iOS Developer</h6>
                                <p>I am currently using React Native Technology to make android and iOs Apps. This
                                    I have made Uber Clone and Full- Stack login Logut system.
                                </p>
                            </li>
                            <li>
                                <h6 className="text-primary">Full Stack Developer MERN - Stack</h6>
                                <p>Using Nodejs ExpressJs and MongoDb together is fun. I have learnt and ggot good experience in making API and Making Full stack E-commerce Project gave me a good confidence.</p>
                            </li>
                            <li>
                                <h6 className="text-primary">Technical Co-ordinator @PU 2020DHOOM </h6>
                                <p>Technical co-ordinator at Dhoom2021 was a great Experience with team.Worked to manage the team and work with hardware parts of technology.On audio and video editig and mixing had a great experience with ADOBE Softwares.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md mb-4">
                        {/* <!-- education --> */}
                        <h2 className="mb-4">Education</h2>
                        <ul>
                            <li>
                                <h6 className="text-primary">Computer Science Engineering / Parul University 2019-2023 </h6>
                                <p>Graduation / B.Tech.</p>
                                <p>8.1 CGPA</p>
                            </li>
                            <li>
                                <h6 className="text-primary">Senior Secondary School / ASVM - Ayodhya 2018-2019 (UP)</h6>
                                <p>CBSE Board / 12th </p>
                                <p>82.3 %</p>
                            </li>
                            <li>
                                <h6 className="text-primary">Higher Secondary School / DPS - Ambedkar Nagar 2016-2017(UP)</h6>
                                <p>CBSE Board / 10th </p>
                                <p>10 CGPA</p>
                            </li>
                            <li>
                                <h6 className="text-primary">Advance Diploma in Computer Application / Vidya Institute of Computer Application - 2015-2016 Sultanpur(UP) </h6>
                                <p>A-Grade</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md mb-5">
                        {/* <!-- skills --> */}
                        <h2 class="mb-4">Skills</h2>

                        <div class="mb-3">
                            <ProgressBar variant="success" now={90} label="HTML" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="success" now={80} label="CSS" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="primary" now={75} label="JavaScript" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="success" now={85} label="ReactJs" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="success" now={80} label="Python" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="primary" now={70} label="NodeJs" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="success" now={75} label="C++" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="danger" now={60} label="ReactNative" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="danger" now={65} label="PHP" />

                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="success" now={80} label="SQL" />
                        </div>
                        <div class="mb-3">
                            <ProgressBar variant="primary" now={70} label="Java" />
                        </div>
                    </div>
                    <div class="col-md">
                        {/* <!-- recent work --> */}
                        <h2 class="mb-4">Recent Work</h2>
                        <div class="row">
                            <div class="col-md mb-3">
                                <a href="https://eloquent-mclean-4617b4.netlify.app" target="_blank">
                                    <img class="img-fluid img-thumbnail" src={image1} />
                                </a>
                            </div>
                            <div class="col-md mb-3">
                                <a href="https://real-estate-app-n.vercel.app/" target="_blank">
                                    <img class="img-fluid img-thumbnail" src={image2} />
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md mb-3">
                                <a href="https://modest-goldwasser-2949aa.netlify.app/" target="_blank">
                                    <img class="img-fluid img-thumbnail" src={image3} />
                                </a>
                            </div>
                            <div class="col-md mb-3">
                                <a href="https://modest-goldwasser-2949aa.netlify.app/" target="_blank">
                                    <img class="img-fluid img-thumbnail" src={image4} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main
