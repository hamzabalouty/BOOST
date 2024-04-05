import React, { useEffect } from 'react';
import './Pricing.css';
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Pricing() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='pricing'>
        <div className='news-title'>
          <h5>OUR PRICE</h5>
          <h2>Best Price For Client Boost</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed interd nisl sit amet tortor feu phasellus.</p>
        </div>
        <div className='pricing-container'>
            <div className='pricing-box'>
                <h4>Standard</h4>
                <h3>$99</h3>
                <h5>/ Month</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <ul>
                    <li>
                        <AiOutlineCheck className='true-icon' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiOutlineCheck className='true-icon' />
                        <p>Consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <AiOutlineClose className='false-icon' />
                        <p>Proin dapibus diam diam.</p>
                    </li>
                    <li>
                        <AiOutlineClose className='false-icon' />
                        <p>Pharetra sollicitudin felis.</p>
                    </li>
                    <li>
                        <AiOutlineClose className='false-icon' />
                        <p>Scelerisque eu mauris.</p>
                    </li>
                </ul>
                <button>Purchase Now</button>
            </div>
            <div className='pricing-box'>
                <h4>Platinum</h4>
                <h3>$199</h3>
                <h5>/ Month</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <ul>
                    <li>
                        <AiOutlineCheck className='true-icon' />
                        <p>Consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <AiOutlineCheck className='false-icon' />
                        <p>Pharetra sollicitudin felis.</p>
                    </li>
                    <li>
                        <AiOutlineCheck className='true-icon' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiOutlineClose className='false-icon' />
                        <p>Proin dapibus diam diam.</p>
                    </li>
                    <li>
                        <AiOutlineClose className='false-icon' />
                        <p>Scelerisque eu mauris.</p>
                    </li>
                </ul>
                <button>Purchase Now</button>
            </div>
            <div className='pricing-box'>
                <h4>Corporate</h4>
                <h3>$299</h3>
                <h5>/ Month</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <ul>
                    <li>
                        <AiOutlineCheck className='false-icon' />
                        <p>Scelerisque eu mauris.</p>
                    </li>
                    <li>
                        <AiOutlineCheck className='true-icon' />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </li>
                    <li>
                        <AiOutlineCheck className='true-icon' />
                        <p>Consectetur adipiscing elit.</p>
                    </li>
                    <li>
                        <AiOutlineCheck className='false-icon' />
                        <p>Proin dapibus diam diam.</p>
                    </li>
                    <li>
                        <AiOutlineCheck className='false-icon' />
                        <p>Pharetra sollicitudin felis.</p>
                    </li>
                </ul>
                <button>Purchase Now</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing;