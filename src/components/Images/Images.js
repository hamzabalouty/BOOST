import React from 'react';
import './Images.css';
import Img1 from '../../assets/Client-1.png';
import Img2 from '../../assets/Client-2.png';
import Img3 from '../../assets/Client-3.png';
import Img4 from '../../assets/Client-4.png';
import Img6 from '../../assets/Client-6.png';

function Images() {
  return (
    <div className='images'>
        <div className='images-container'>
            <img src={Img1} alt='image'/>
            <img src={Img2} alt='image'/>
            <img src={Img3} alt='image'/>
            <img src={Img4} alt='image'/>
            <img src={Img6} alt='image'/>
            <img src={Img1} alt='image'/>
        </div>
    </div>
  )
}

export default Images;