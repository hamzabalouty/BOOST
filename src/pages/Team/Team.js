import React, { useEffect } from 'react';
import './Team.css';
import Vision from '../../components/Vision/Vision';
import Img1 from '../../assets/business-man-in-the-subway-KW75GVE.jpg';
import Img2 from '../../assets/business-woman-VKBQ9L5.jpg';
import Img3 from '../../assets/cinematic-image-of-a-senior-business-man-TXGKASB.jpg';
import Img4 from '../../assets/confident-happy-and-smiling-business-woman-standin-WQ254GW.jpg';
import Img5 from '../../assets/business-woman-MCSQA8D.jpg';
import Img6 from '../../assets/happy-mature-business-man-8YFT4BQ.jpg';
import Img7 from '../../assets/young-businesswoman-working-in-office-8MH3WAA.jpg';
import Img8 from '../../assets/portrait-of-a-business-man-HWYNCJE.jpg';

function Team() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='team'>
        <div className='about-team'>
         <div className='news-title'>
          <h5>OUR TEAM</h5>
          <h2>Teamwork Makes the Dream Work</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interd nisl sit amet tortor feu phasellus.</p>
         </div>
        <div className='about-team-container'>
          <div className='about-box'>
            <img src={Img1} alt='image'/>
            <div className='about-box-content'>
              <h3>Benjamin Davis</h3>
              <p>CEO of BOOST</p>
            </div>
          </div>
          <div className='about-box'>
            <img src={Img2} alt='image'/>
            <div className='about-box-content'>
              <h3>Elizabeth Grace</h3>
              <p>Consulting Director</p>
            </div>
          </div>
          <div className='about-box'>
            <img src={Img3} alt='image'/>
            <div className='about-box-content'>
              <h3>William Harrison</h3>
              <p>Consulting Finance</p>
            </div>
          </div>
          <div className='about-box'>
            <img src={Img4} alt='image'/>
            <div className='about-box-content'>
              <h3>Grace Williams</h3>
              <p>Consulting Finance</p>
            </div>
          </div>
          <div className='about-box'>
            <img src={Img5} alt='image'/>
            <div className='about-box-content'>
              <h3>Benjamin Davis</h3>
              <p>Finance Consulting</p>
            </div>
          </div>
          <div className='about-box'>
            <img src={Img6} alt='image'/>
            <div className='about-box-content'>
              <h3>Caldwell Austin</h3>
              <p>Finance Consulting</p>
            </div>
          </div>
          <div className='about-box'>
            <img src={Img7} alt='image'/>
            <div className='about-box-content'>
              <h3>Helena Kazaqh</h3>
              <p>Consulting Finance</p>
            </div>
          </div>
          <div className='about-box'>
            <img src={Img8} alt='image'/>
            <div className='about-box-content'>
              <h3>William Harrison</h3>
              <p>Consulting Finance</p>
            </div>
          </div>
        </div>
      </div>
      <Vision />
    </div>
  )
}

export default Team;