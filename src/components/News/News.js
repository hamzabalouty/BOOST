import React from 'react';
import './News.css';
import Img1 from '../../assets/Blog-6.jpg';
import Img2 from '../../assets/Blog-4.jpg';
import Img3 from '../../assets/Blog-1.jpg';

function News() {
  return (
    <div className='news'>
        <div className='news-title'>
            <h5>NEWS & ARTICLES</h5>
            <h2>The Latest News</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interd nisl sit amet tortor feu phasellus.</p>
        </div>
        <div className='news-container'>
            <div className='news-box'>
                <img src={Img1} alt='image'/>
                <p>April 11, 2023</p>
                <h2>Yearly Health Check-up and Audit by Consultants to Improve Efficiency</h2>
            </div>
            <div className='news-box'>
                <img src={Img2} alt='image'/>
                <p>April 11, 2023</p>
                <h2>9 Ways to Breaking the Ice and Reaching out for Consulting Business</h2>
            </div>
            <div className='news-box'>
                <img src={Img3} alt='image'/>
                <p>April 11, 2023</p>
                <h2>On Running Your Own iOS Consulting Business, with Benjamin Davis</h2>
            </div>
        </div>
    </div>
  )
}

export default News;