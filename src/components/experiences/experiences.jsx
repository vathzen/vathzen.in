import React from 'react';
import './experiences.css'

import RR from '../../assets/img/silhouette.jpeg'
import Fin from '../../assets/img/logo.png'
import Lazy from '../../assets/img/lazyp.png';

const Experience = (props) => {
    return (
        <div className='experience'>
            <div className="outerTitle">
                <div className="title">&lt;Work Experience/&gt;</div>
                <img src={RR} width="80%" alt='Me' style={{borderRadius:'70%', borderStyle: 'solid', borderWidth: '1px', borderColor: '#2f2f2f'}}/>
            </div>
            <div className="body">
                <div className="desc">
                    <p>I've been professionally working from my 2nd year of college, involving primarily in Full Stack Development and Amateur Machine Learning Tasks.</p>
                </div>

                <div className="companies">
                    <div className="sub-title">Full Time Experiences</div>
                    <div className="comp-container">
                        <div className="company">
                            <div className="logo">
                                <img src="https://media.glassdoor.com/sqll/13461/tata-consultancy-services-squareLogo-1634801936679.png" alt="TCS Logo" />
                            </div>
                            <div className="comp-info">
                                <p>Tata Consultancy Services ( <a href='https://www.tcs.com/'><img src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/open-external-link.png" height='15vh' /></a> ) </p>
                                <p><b>Nov 2020 - Present</b></p>
                                <p>Working as a Oracle Developer, consulting for Kemper in the BFSI Domain. Spearheaded many high visibility Projects and Enhancements in Unix and PL/SQL.</p>
                            </div>
                        </div>
                    </div>

                    <div className="sub-title">Internships</div>
                    <div className="comp-container">
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
                        <hr />
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
                        <hr />
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

                    <div className="sub-title">Freelance Work</div>
                    <div className="comp-container">
                        <div className="company">
                            <div className="logo">
                                <img src={Fin} width="150px" alt="" />
                            </div>
                            <div className="comp-info">
                                <p>Freezon Labs ( <a href='https://www.finvoiced.com/'><img src="https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/open-external-link.png" height='15vh' /></a> )</p>
                                <p><b>Aug 2020 - Nov 2020</b></p>
                                <p>Created a Full Stack Application using Flask, React and MongoDB that uses a Machine Learning Backend to extract tabular data from Invoices and exports it as JSON and other formats.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="company">
                            <div className="logo">
                                <img src="https://d1mf4ril8efyfr.cloudfront.net/static/img/shopster-top-white.png" className="shopster" alt="" />
                            </div>
                            <div className="comp-info">
                                <p>ML Labs</p>
                                <p><b>Consultant</b></p>
                                <p>Worked in various Projects, mostly on Web Developement and Dev Ops for Shopster; An E-Commerce Platform that specializes in Storefront Setup and Delivery.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="desc">
                            <p>I have also consulted for various Startups as a Web Developer and as a Dev Ops Manager, listed some below in no particular order.</p>
                            <div className="consult">
                                <a href="https://smoose.in/"><img src="https://smoose.in/assets/images/logo/logo.png" width="200px" alt="" /></a>
                                <a href="https://brandma.in/"><img src="https://brandma.in/wp-content/uploads/2021/06/cropped-Brandma-Final-01-1-1024x366.png" alt="Brand Ma" width="200px"/></a>
                                <a href="http://tsysheninc.com/"><img src="https://secureservercdn.net/160.153.138.53/p7g.57c.myftpupload.com/wp-content/uploads/2020/10/cropped-Untitled-1.png" width="200px" alt="" /></a>
                                <a href="http://lazypandaw.in/"><img src={Lazy} width="200px" alt="" /></a>
                            </div>
                        </div>
                    </div>                       
                                   
                </div>
            </div>
        </div>
    )
}

export default Experience;