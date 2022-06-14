import React from 'react';
import './me.css'

import PP from '../../assets/img/me.png'
import Card from '../../assets/img/card.png'

const Me = (props) => {
    return (
        <div className="about-me">
            <div className="outerTitle">
                <div className="title">Hi ! I'm Sri Vathsan.</div>
                <img src={PP} width="80%" style={{borderRadius:'50%'}}/>
            </div>
            <div className="body">
                <div className="desc">
                    <p>I'm an alumnus of SASTRA University, Thanjavur where I completed my B.Tech in Information and Communication Technology in 2020.</p>
                    
                    <p>I currently work as a Systems Engineer in TCS, focusing on applications in the BFSI domain and specialize in Unix and PL/SQL stack.</p>
                    
                    <p>I'm also a proud alumnus of one of the largest chain of schools in the world, Kendriya Vidyalaya, graduating from the Ashok Nagar branch in 2016 majoring in Computer Science.</p>

                    <p>Though this website started as a hobby in learning the basics of website development, it now serves as my personal portfolio and showcases all the projects I've worked on and much more. </p>

                    <p>Listed below are links where you can find me! </p>
                </div>
                <div className="info">
                    <div className="steam">
                        <a href='https://steamcommunity.com/id/vathzen/' target='_blank' ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png" alt="Steam" height="50px"/></a>
                        <p>I play a lot of Dota2 and a bit of Counter Strike. Recently started playing Apex Legends. Add me so that we can play together!</p>
                    </div>
                    <div className="discord">
                        <div className="col widget">
                            <iframe src="https://discord.com/widget?id=689751377777393730&theme=dark" height="100%" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                        </div>
                        <div className="col info-col">
                            <p>I'm most probably hanging out in my Discord Server, whether playing or backseat gaming with my friends. Feel free to hop on!</p>
                            <img src={Card} alt="" srcset="" width='70%'/>
                            <p>Here's my card if you want to contact me!</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

// https://lichess.org/?user=vishalsrinath#friend

export default Me;