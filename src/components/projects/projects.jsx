import React from 'react';
import './projects.css'

import QQ from '../../assets/img/silhouette.jpeg';

import iGEM from '../../assets/img/projects/igem_logo.jpg';
import TeamPic from '../../assets/img/projects/igem_team.webp';


const Projects = (props) => {
    return (
        <div className="projects">
            <div className="outerTitle">
                <div className="title">&lt; Projects /&gt;</div>
                <img src={QQ} width="80%" alt='Me' style={{borderRadius:'70%', borderStyle: 'solid', borderWidth: '1px', borderColor: '#2f2f2f'}}/>
            </div>

            <div className="body">
                <div className="desc">
                    <p>Listed are the various personal projects and Projects I have worked in my college over the years.</p>
                    <p style={{fontSize:'1.5vh'}}>Skip to the fun ones ></p>
                </div>

                <div className="projects-outer">
                    <div className="proj-container">
                        <div className="project">
                            <div className='sub-title'>iGEM 2019</div>
                            <div className="logo">
                                <img src={iGEM} alt="" height="200px" className='iGem'/>
                                <img src={TeamPic} alt="" height="350px" />
                            </div>
                            <div className="proj-info">
                                <p>Represented the University and Won Silver Medal Internationally in iGEM 2019 Competition.</p>
                                <p>Developed the Project Website and Machine Learning Classifier for identifying optimal toehold switch design based on physical parameters towards detection of cervical cancer markers.</p>
                                <p>Co-Ordinated Social Media Outreach and PR for the project.</p>
                                <div className="project-links">
                                    <div>Project Website :&nbsp;<a href="https://2019.igem.org/Team:SASTRA_Thanjavur"> SASTRA Thanjavur iGEM 2019</a>&nbsp;</div>
                                    <div>Toehold Design :&nbsp;<a href="https://sas.sastra.edu/rnatoedesign/"> Toehold Designer</a>&nbsp;</div>
                                    <div>Instagram :&nbsp;<a href="https://www.instagram.com/igem_sastra/"> iGEM @ Sastra </a></div>
                                </div>
                            </div>                           
                        </div>
                        <hr />
                        <div className="project">
                            <div className='sub-title'>SASTRA Mess App</div>
                            <div className="proj-info">
                                <p>Sastra Mess Food Booking App connects Catering Services to fingertips of Students, allowing them to book the A La Carte Menu Offered from anywhere.</p>
                                <p>Developed the REST API and the Database Structure for the project with 2 Frontends; Admin Interface and Student Interface.</p>
                                <p>Automatically interfaces with Student Web Portal to show updated data.</p>
                                <div className="project-links">
                                    <div>Project Website :&nbsp;<a href="https://yumsastra.vathzen.in/"> Yum - Sastra</a>&nbsp;</div>
                                    <div>
                                        Github :
                                        <ul>
                                            <li>Backend : <a href="https://github.com/vathzen/mess-backend">mess-backend</a></li>
                                            <li>Student App : <a href="https://github.com/vathzen/SASTRAMess">Yum SASTRA</a></li>
                                            <li>Admin Front End : <a href="https://github.com/vathzen/WebAppMess">Mess WebApp</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;