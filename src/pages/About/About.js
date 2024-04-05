import React, { useEffect } from "react";
import './About.css';
import { Link } from 'react-router-dom';
import Vision from '../../components/Vision/Vision';
import Faqs from '../../components/Faqs/Faqs';
import Img from '../../assets/businessmen-consulting-P2W7F4S.jpg';
import Img1 from '../../assets/business-man-in-the-subway-KW75GVE.jpg';
import Img2 from '../../assets/business-woman-VKBQ9L5.jpg';
import Img3 from '../../assets/cinematic-image-of-a-senior-business-man-TXGKASB.jpg';
import Img4 from '../../assets/confident-happy-and-smiling-business-woman-standin-WQ254GW.jpg';
import ReactPlayer from 'react-player';
import Video from './video.mp4';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-head'>
          <h2>Dedicated to Helping Business Thrive & Succeed.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interdum nisl sit amet tortor euismo feugiat phasellus suscipit lorem ut bibendum lacinia elit velit hendrerit erat vel convalli nisi nulla quis nibh integer.</p>
        </div>
        <div className='about-video'>
          <ReactPlayer
            url={Video}
            width="640"
            height="360"
            controls
          />  
        </div>
      </div>
      <div className='landing'>
        <div className='landing-container'>
          <div className='landing-content'>
            <h3>ABOUT US</h3>
            <h1>Strategic Solutions to Drive Your Business Forward</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interdum nisl sit amet tortor euismo feugiat phasellus suscipit lorem ut bibendum lacinia elit velit hendrerit erat vel convalli nisi nulla quis nibh integer scelerisque turpis ornare felis sollicitudin hendrerit quisque.</p>
            <Link to='/about' className='landing-btn'>More About Us</Link>
          </div>
          <div className='landing-image'>
            <img src={Img} alt='image'/>
          </div>
        </div>
      </div>
      <Vision />
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
        </div>
      </div>
      <Faqs />
    </div>
  )
}

export default About;