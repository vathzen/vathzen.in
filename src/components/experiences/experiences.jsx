import React from 'react';
import './experiences.css'

import RR from '../../assets/img/silhouette.jpeg'

const Experience = (props) => {
    return (
        <div className='experience'>
            <div className="outerTitle">
                <div className="title">&lt;Work Experience/&gt;</div>
                <img src={RR} width="80%" style={{borderRadius:'70%', borderStyle: 'solid', borderWidth: '1px', borderColor: '#2f2f2f'}}/>
            </div>
            <div className="body">
                <div className="desc">
                    <p>I've been professionally working from my 2nd year of college, involving primarily in Full Stack Development and Amateur Machine Learning Tasks.</p>
                </div>

                <div className="companies">
                    <div className="sub-title">Full Time Experiences</div>
                        <div className="fte">
                            <div className="company">
                                <div className="logo">
                                    <img src="https://media.glassdoor.com/sqll/13461/tata-consultancy-services-squareLogo-1634801936679.png" alt="" />
                                </div>
                                <div className="comp-info">
                                    <p>Tata Consultancy Services ( <a href='https://www.tcs.com/'><img src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/open-external-link.png" height='15vh' /></a> ) </p>
                                    <p><b>Nov 2020 - Present</b></p>
                                    <p>Worked as a Oracle Developer, consulting for Kemper in the BFSI Domain. Spearheaded many high visibility Projects and Enhancements in Unix and PL/SQL.</p>
                                </div>
                            </div>
                        </div>
                    <div className="sub-title">Internships</div>
                        <div className="fte">
                            <div className="company">
                                <div className="logo">
                                    <img src="https://media.glassdoor.com/sqll/13461/tata-consultancy-services-squareLogo-1634801936679.png" alt="" />
                                </div>
                                <div className="comp-info">
                                    <p>Tata Consultancy Services ( <a href='https://www.tcs.com/'><img src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/open-external-link.png" height='15vh' /></a> ) </p>
                                    <p><b>Jan 2020 - Apr 2020</b></p>
                                    <p>Worked on Cross Platform App Development in Flutter for Product being developed by TCS. Had a first hand experience in SDLC and Agile Team Environment.</p>
                                </div>
                            </div>
                            <div className="company">
                                <div className="logo">
                                    <img src="https://ppisr.res.in/demo/wp-content/uploads/2019/01/ppisr-logo-new.png" height="180px" width="180px" alt=""  />
                                </div>
                                <div className="comp-info">
                                    <p>Poornaprajna Institute of Scientific Research ( <a href='https://ppisr.res.in/'><img src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/open-external-link.png" height='15vh' /></a> )</p>
                                    <p><b>May 2019 - June 2019</b></p>
                                    <p>Enrolled as a Resarch Intern under Prof. Srikanth and learned about the Mathematical and Physical foundations of Quantum Mechanics and Quantum Information theory.</p>
                                </div>
                            </div>
                            <div className="company">
                                <div className="logo">
                                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQEn1_H5TeKTog/company-logo_200_200/0/1643866315481?e=2147483647&v=beta&t=fcfaamjXQrAexXiDC8bAzZEP0iIGnSUukKPDNqwfPM8" height="180px" width="180px" alt=""  />
                                </div>
                                <div className="comp-info">
                                    <p>Synergita ( <a href='https://www.synergita.com/'><img src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/open-external-link.png" height='15vh' /></a> ) </p>
                                    <p><b>Nov 2018 - Dec 2018</b></p>
                                    <p>Developed an Automated Solution that sorts Customer Support Tickets into various buckets using Natural Language Processing.</p>
                                </div>
                        </div>
                    </div>
                    <div className="sub-title">Freelance Projects</div>
                        <div className="fte">
                            <div className="company">
                                <div className="logo">
                                    <img src="https://www.finvoiced.com/assets/images/finvoiced-removebg-preview-3.png" height="150px" width="150px" alt="" />
                                </div>
                                <div className="comp-info">
                                    <p>Finvoiced ( <a href='https://www.finvoiced.com/'><img src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/open-external-link.png" height='15vh' /></a> )</p>
                                    <p><b>Aug 2020 - Nov 2020</b></p>
                                    <p>Worked as a Oracle Developer, consulting for Kemper in the BFSI Domain. Spearheaded many high visibility Projects and Enhancements in Unix and PL/SQL.</p>
                                </div>
                            </div>
                        </div>                       
                </div>               
            </div>

            
        </div>
    )
}

export default Experience;