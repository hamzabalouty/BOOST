import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import Img from '../../assets/businessmen-consulting-P2W7F4S.jpg';

function Landing() {
  return (
    <div className='landing'>
      <div className='landing-container'>
        <div className='landing-image'>
          <img src={Img} alt='image'/>
        </div>
        <div className='landing-content'>
          <h3>ABOUT US</h3>
          <h1>Strategic Solutions to Drive Your Business Forward</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interdum nisl sit amet tortor euismo feugiat phasellus suscipit lorem ut bibendum lacinia elit velit hendrerit erat vel convalli nisi nulla quis nibh integer scelerisque turpis ornare felis sollicitudin hendrerit quisque.</p>
          <Link to='/about' className='landing-btn'>More About Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing;