import React from 'react';
import { Link } from 'react-router-dom';

import Doodle from '../../assets/img/home/doodle.jpg'
import Peak from '../../assets/img/home/mountain-top.png'
import Speech from '../../assets/img/home/speech.jpg'
import Moon from '../../assets/img/home/moon.png'
import Bungee from '../../assets/img/home/bungee.png'

import Session from '../../assets/img/home/session.jfif'
import PP from '../../assets/img/home/pp.jpg'
import MB from '../../assets/img/home/math-board.jpg'
import MF from '../../assets/img/home/mountain-foot.png'
import Bookmark from '../../assets/img/home/bookmark.jpeg'
import Stitch from '../../assets/img/home/Stitch2.jpg'

import PDF from '../../assets/docs/resume.pdf'

import './home.css'

const Home = (props) => {
    return (
        <div className='outer'>
            <div className='grid'>
                <img src={Doodle} alt="Doodle" />
                <img src={Speech} alt="Speech" />
                <img src={Moon} alt="Speech" />
                <img src={Peak} alt="Peak" />
                <img src={Bungee} alt="Moon" />
            </div>
            <div className="appBarOuter">
                <div className="nav">
                    <Link to="/about-me" className="links">Me</Link>
                    <a href="https://books.vathzen.in/#library_id=Calibre&panel=book_list" target="_blank">Books</a>
                    <a href="https://blog.vathzen.in" target="_blank">Blog</a>
                    <a href={PDF} target="_blank" className="links">Resume</a>
                </div>
                <div className='appBar'>
                    <div className='inner'>
                        <div>
                            <span class="name">Sri Vathsan.</span>
                            <div className='break'><br /></div>
                            <span class="profession">full stack developer.</span>
                        </div>
                    </div>
                    <div className='inner'>
                        <div className='icons'>
                            <a href="https://github.com/vathzen" target='_blank'><img src="https://img.icons8.com/fluent-systems-regular/36/000000/github.png" /></a>
                            <a href="https://www.linkedin.com/in/vathsan64/" target='_blank'><img src="https://img.icons8.com/metro/36/000000/linkedin.png" /></a>
                            <div id='contact'><a href="mailto:srivats64@gmail.com" target='_blank'>contact</a></div>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <Link to="/projects" className="links">Projects</Link>
                    <Link to="/experience" className="links">Experience</Link>
                    <Link to="" className="links">Interests</Link>
                    <Link to="" className="links">Designs</Link>
                </div>
            </div>
            <div className='grid lower'>
                <img src={Session} alt="" />
                <img src={MF} alt="Math Board" />
                <img src={PP} alt="Beach" />
                <img src={MB} alt="Me" />
                <img src={Bookmark} alt="Bookmark" />
                <img src={Stitch} alt="Mountain Top" />
            </div>
        </div>
    )
}

export default Home;
