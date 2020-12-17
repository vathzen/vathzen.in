import React from 'react';

import './home.css'

const Home = (props) => {
    return (
        <div className='outer'>
            <div className='grid'>
                
                <img src="https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/78911565_462047168041456_4643271556197563369_n.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=iM1NXrHVqwQAX-tTDR2&tp=1&oh=efa9768a70d74dac034d315821aabb75&oe=600467AB" alt=""/>
                <img src="https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.2885-15/e35/14693839_896455077156587_1290381357389709312_n.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=fFvQ-1HBgNYAX80-wT5&tp=1&oh=27815b46b96dd904fa5f742593ee7e9a&oe=600487A8" alt=""/>
                <img src="https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/53607388_428084794613603_6824114720108577678_n.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=KPWRG1Il-GIAX8wNTRM&tp=1&oh=074ba5363ab90a746c4e842e9d064fd5&oe=60054053" alt=""/>
                <img src="https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120898822_110589014055088_2031305231272080989_n.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=rdCUiIdGpasAX8DgVqo&tp=1&oh=eb2db09b0a49cd2f22ad6e53798ea3ee&oe=60045954" alt=""/>
                <img src="https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120898822_110589014055088_2031305231272080989_n.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=rdCUiIdGpasAX8DgVqo&tp=1&oh=eb2db09b0a49cd2f22ad6e53798ea3ee&oe=60045954" alt=""/>
            </div>
            <div className='appBar'>
                <div className='inner'>
                    <div>
                        <span class="name">Sri Vathsan.</span> <div className='break'><br/></div> <span class="profession">full stack developer.</span>
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
                <img src="https://media-exp1.licdn.com/dms/image/C5122AQEnUmtwtoDq0w/feedshare-shrink_1280/0/1569683697513?e=1611187200&v=beta&t=vshtEkgiNY6z7bSwIl_CRyUH-5ZMASSeORaF1WFdCq0" alt=""/>
                <img src="https://drive.google.com/uc?export=view&id=1YSdyPWM0N5_B49s48KBdEgUMEQmGzbKP" alt=""/>
                <img src="https://drive.google.com/uc?export=view&id=1hkqk-GWH4ftUh-yk9xcqr7vY1qDOx9Du" alt=""/>
                <img src="https://drive.google.com/uc?export=view&id=1F2-6GHAjQEsVU_6PxDU7UhPEzUjNcYRv" alt=""/>
                <img src="https://drive.google.com/uc?export=view&id=19PjBITguSz7XPDxMW1UhW40-M36SOtjx" alt=""/>
            </div>
        </div>
    )
}

export default Home;