import React from 'react';
import './Footer.css';
import Image from '../../assets/Boost-Logo-1.png';
import { FaAngleRight } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-col'>
                <img src={Image} alt='image' />
                <p>Lorem ipsum dolor sit amet consectetur adipiscin elit phasellus sed dignissim orci integer id lorem v massa tristique eleifend curabitur.</p>
            </div>
            <div className='footer-col'>
                <h4>Quick Links</h4>
                <hr/>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>About Us</p>
                </div>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>Services</p>
                </div>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>Contact</p>
                </div>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>FAQs</p>
                </div>
            </div>
            <div className='footer-col'>
                <h4>Our Services</h4>
                <hr/>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>Business Strategy</p>
                </div>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>Financial Consulting</p>
                </div>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>Marketing & Branding</p>
                </div>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>Information Technology</p>
                </div>
                <div className='footer-col-icon'>
                    <FaAngleRight className='footer-r-icon' />
                    <p>Operations & Supply Chain</p>
                </div>
            </div>
            <div className='footer-col last-row-foot'>
                <h4>Contact Information</h4>
                <hr/>
                <p>Pekanbaru, Indonesia,<br/>99 Roving St., Big City,<br/>PKU 23456</p>
                <p>Call Us : 1 (123) 234 1234<br/>We are open from Monday to Friday<br/>00.90 AM - 17.00 PM</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;