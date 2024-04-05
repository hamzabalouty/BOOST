import React, { useEffect } from 'react';
import './Testimonials.css';
import { testData } from '../../data';
import { FaQuoteLeft } from "react-icons/fa";
import Call from '../../components/Call/Call';
import Faqs from '../../components/Faqs/Faqs';

function Testimonials() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='testimonials'>
        <div className='testimonials-title'>
            <h5>TESTIMONIALS</h5>
            <h2>What Client Says About BOOST</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interd nisl sit amet tortor feu phasellus.</p>
        </div>
        <div className='testimonials-container'>
            {testData.map((item) => (
                <div key={item.id} className='testimonials-box'>
                    <div className='testimonials-head'>
                        <FaQuoteLeft className='quote-icon'/>
                        <h3>{item.title}</h3>
                    </div>
                    <p className='test-desc'>{item.desc}</p>
                    <div className='testimonials-per'>
                        <img src={item.img} alt='image'/>
                        <div className='testimonials-per-name'>
                            <h4>{item.name}</h4>
                            <p>{item.job}</p>
                        </div>  
                    </div>
                </div>
            ))}
            
        </div>
        <Call />
        <Faqs />
    </div>
  )
}

export default Testimonials;