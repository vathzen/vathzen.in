import React from 'react';

import Doodle from '../../assets/img/doodle.jpg' 
import Peak from '../../assets/img/mountain-top.png'
import Speech from '../../assets/img/speech.jpg'
import Moon from '../../assets/img/moon.png'
import Bungee from '../../assets/img/bungee.png'

import Session from '../../assets/img/session.jfif'
import PP from '../../assets/img/pp.jpg'
import MB from '../../assets/img/math-board.jpg'
import MF from '../../assets/img/mountain-foot.png'
import Stitch from '../../assets/img/Stitch.jpg'

import './home.css'

const Home = (props) => {
    return (
        <div className='outer'>
            <div className='grid'>
                <img src={Doodle} alt="Doodle"/>
                <img src={Bungee} alt="Speech"/>
                <img src={Speech} alt="Speech"/>
                <img src={Peak} alt="Peak"/>
                <img src={Moon} alt="Moon"/>
            </div>
            <div className='appBar'>
                <div className='inner'>
                    <div>
                        <span class="name">Sri Vathsan.</span> 
                        <div className='break'><br/></div> 
                        <span class="profession">full stack developer.</span>
                    </div>
                </div>
                <div className='inner'>
                    <div className='icons'>
                        <a href="https://github.com/froossv" target='_blank'><img src="https://img.icons8.com/fluent-systems-regular/36/000000/github.png" /></a>
                        <a href="https://www.linkedin.com/in/vathsan64/" target='_blank'><img src="https://img.icons8.com/metro/36/000000/linkedin.png" /></a>
                        <div id='contact'><a href="mailto:srivats64@gmail.com" target='_blank'>contact</a></div>
                    </div>
                </div>
            </div>
            <div className='grid lower'>
                <img src={Session} alt=""/>
                <img src={MF} alt="Math Board"/>
                <img src={PP} alt="Beach"/>
                <img src={MB} alt="Me"/>
                <img src={Stitch} alt="Mountain Top"/>
            </div>
        </div>
    )
}

export default Home;