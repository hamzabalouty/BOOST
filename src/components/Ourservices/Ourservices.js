import React from 'react';
import './Ourservices.css';
import { ourservicesData } from '../../data';
import { FaLongArrowAltRight } from "react-icons/fa";

function Ourservices() {
  return (
    <div className='ourservices'>
        <div className='ourservices-title'>
            <h3>OUR SERVICES</h3>
        </div>
        <div className='ourservices-container'>
            {ourservicesData.map((item) => (
                <div className='ourservices-box' key={item.id}>
                    <img src={item.image} alt='image'/>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <hr/>
                    <div className='ourser-link'>
                        <a href='#' className='ourservices-link'>Learn More</a>
                        <FaLongArrowAltRight className='ourservices-r-icon'/>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Ourservices;