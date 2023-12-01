import React from 'react';
import { Link } from 'react-router-dom';

import Doodle from '../../assets/img/home/doodle.jpg'
import Peak from '../../assets/img/home/mountain-top.png'
import Speech from '../../assets/img/home/speech.jpg'
import Moon from '../../assets/img/home/moon.png'
import Bungee from '../../assets/img/home/bungee.png'

import Session from '../../assets/img/home/session.jpg'
import PP from '../../assets/img/home/pp.jpg'
import MB from '../../assets/img/home/snow.jpg'
import MF from '../../assets/img/home/mountain-foot.png'
import Bookmark from '../../assets/img/home/bookmark.jpeg'
import Stitch from '../../assets/img/home/rainbow.jpg'

import PDF from '../../assets/docs/resume.pdf'

import './home.css'

const Home = (props) => {
    return (
        <div className='outer'>
            <div className='grid'>
                <img src={Doodle} alt="Doodle" />
                <img src={Speech} alt="Speech" />
                <img src={Moon} alt="Moon" />
                <img src={Peak} alt="Peak" />
                <img src={Bungee} alt="Moon" />
            </div>
            <div className="appBarOuter">
                <div className="nav">
                    <Link to="/about-me" className="links">Me</Link>
                    <a href="https://www.goodreads.com/user/show/140975390-srivathsan" target='_blank' rel="noreferrer">Books</a>
                    <a href="https://blog.vathzen.in" target='_blank' rel="noreferrer">Blog</a>
                    <a href={PDF} target='_blank' rel="noreferrer" className="links">Resume</a>
                </div>
                <div className='appBar'>
                    <div className='inner'>
                        <div>
                            <span class="name">Sri Vathsan.</span>
                            <div className='break'><br /></div>
                            <span class="profession">Quantum Physicist. Computer Scientist.</span>
                        </div>
                    </div>
                    <div className='inner'>
                        <div className='icons'>
                            <a href="https://github.com/vathzen" target='_blank' rel='noreferrer'><img src="https://img.icons8.com/fluent-systems-regular/36/000000/github.png" alt='github-icon' /></a>
                            <a href="https://www.linkedin.com/in/vathsan64/" target='_blank' rel='noreferrer'><img src="https://img.icons8.com/metro/36/000000/linkedin.png" alt='linkedin-icon' /></a>
                            <div id='contact'><a href="mailto:srivats64@gmail.com" target='_blank' rel='noreferrer'>contact</a></div>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <Link to="/projects" className="links">Projects<sup>WIP</sup></Link>
                    <Link to="/experience" className="links">Experience</Link>
                    <Link to="" className="links">Interests<sup>soon</sup></Link>
                    <Link to="" className="links">Designs<sup>soon</sup></Link>
                </div>
            </div>
            <div className='grid lower'>
                <img src={Stitch} alt="Liffey" />
                <img src={PP} alt="Profile Pic" />
                <img src={MF} alt="Cloud View" />
                <img src={Session} alt="Git Session" />
                <img src={MB} alt="Snowfall" />
                <img src={Bookmark} alt="Bookmark" />

            </div>
        </div>
    )
}

export default Home;
