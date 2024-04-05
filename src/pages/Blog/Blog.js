import React, { useEffect } from 'react';
import './Blog.css';
import { blogData } from '../../data';

function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='blog'>
        <div className='blog-title'>
            <h5>NEWS & ARTICLES</h5>
            <h2>The Latest News</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interd nisl sit amet tortor feu phasellus.</p>
        </div>
        <div className='blog-container'>
            {blogData.map((item) => (
                <div key={item.id} className='blog-box'>
                    <img src={item.img} alt='image'/>
                    <p>{item.date}</p>
                    <h2>{item.title}</h2>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Blog;