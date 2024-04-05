import React from 'react';
import './Vision.css';
import  Image from '../../assets/there-are-no-limits-to-their-vision-of-success-5BTMWGY.jpg';
import { FaArrowAltCircleRight } from "react-icons/fa";


function Vision() {
  return (
    <div className='vision'>
        <div className='vision-container'>
            <div className='vision-image'>
                <img src={Image} alt='image'/>
            </div>
            <div className='vision-content'>
                <h5>VISION & MISSION</h5>
                <h2>Experience Benefits of Professional Consulting</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interdum nisl sit amet tortor euismo feugiat phasellus suscipit lorem ut bibendum lacinia elit velit hendrerit erat vel convalli nisi nulla quis nibh integer scelerisque turpis ornare felis sollicitudin hendrerit quisque.</p>
                <hr/>
                <div className='vision-content-d'>
                    <FaArrowAltCircleRight className='vision-arrow-icon'/>
                    <div className='vision-content-d-text'>
                        <h4>Vision</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className='vision-content-d'>
                    <FaArrowAltCircleRight className='vision-arrow-icon'/>
                    <div className='vision-content-d-text'>
                        <h4>Mission</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vision;